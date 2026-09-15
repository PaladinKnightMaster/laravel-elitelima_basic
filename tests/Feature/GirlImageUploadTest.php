<?php

namespace Tests\Feature;

use App\Admin;
use App\City;
use App\Country;
use App\EyeColor;
use App\Girl;
use App\GirlImage;
use App\HairColor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Intervention\Image\Laravel\Facades\Image;
use Tests\TestCase;

/**
 * Exercises the photo upload path end to end.
 *
 * This is the code that moved from Intervention Image v2 to v3 during the
 * Laravel 12 upgrade (Image::make -> read, resize -> scale, insert -> place,
 * fit -> cover) and had never actually run since. It also covers the filename
 * hardening, which is the difference between storing a photo and storing an
 * executable file inside the document root.
 */
class GirlImageUploadTest extends TestCase
{
    use RefreshDatabase;

    private string $uploads;

    protected function setUp(): void
    {
        // Skip before parent::setUp(), or RefreshDatabase opens a transaction
        // that the skip then leaves dangling for the next test.
        if (! extension_loaded('gd') && ! extension_loaded('imagick')) {
            $this->markTestSkipped('Intervention Image needs gd or imagick.');
        }

        parent::setUp();

        $this->uploads = public_path('uploads');

        // The controller composites a watermark over every upload, reading it
        // from uploads/<settings.banner>, falling back to placeholder.png.
        @mkdir($this->uploads, 0775, true);
        Image::create(120, 40)->save($this->uploads.'/placeholder.png');
    }

    protected function tearDown(): void
    {
        // A skipped test never booted the application, so there is nothing to
        // clean up and the container is not available to look anything up.
        if ($this->app !== null) {
            foreach (GirlImage::all() as $image) {
                @unlink($this->uploads.'/girls/'.$image->image);
                @unlink($this->uploads.'/girls/thumbs/'.$image->image);
            }
            @unlink($this->uploads.'/placeholder.png');
        }

        parent::tearDown();
    }

    private function actingAsAdmin(): self
    {
        $admin = Admin::create([
            'name' => 'Test Admin',
            'email' => 'admin@example.test',
            'password' => bcrypt('password'),
            'role' => 1,
        ]);

        return $this->actingAs($admin, 'admin');
    }

    /**
     * girls has foreign keys onto cities, hair_colors and eye_colors, so those
     * rows have to exist first.
     *
     * Attributes are assigned rather than mass-assigned: none of these models
     * declare $fillable, so create() throws MassAssignmentException.
     */
    private function lookups(): array
    {
        $country = new Country();
        $country->name = 'Peru';
        $country->slug = 'peru';
        $country->save();

        $city = new City();
        $city->name = 'Lima';
        $city->slug = 'lima';
        $city->country_id = $country->id;
        $city->save();

        $hair = new HairColor();
        $hair->name = 'Black';
        $hair->english = 'Black';
        $hair->spanish = 'Negro';
        $hair->save();

        $eye = new EyeColor();
        $eye->name = 'Brown';
        $eye->english = 'Brown';
        $eye->spanish = 'Marron';
        $eye->save();

        return [$city->id, $hair->id, $eye->id];
    }

    public function test_an_uploaded_photo_is_watermarked_and_thumbnailed(): void
    {
        [$cityId, $hairId, $eyeId] = $this->lookups();

        $response = $this->actingAsAdmin()->post('/admin/girls', [
            'name' => 'Test Model',
            'city' => $cityId,
            'hair_color' => $hairId,
            'eye_color' => $eyeId,
            'images' => [UploadedFile::fake()->image('holiday snap.jpg', 800, 600)],
            'en' => ['English caption'],
            'es' => ['Spanish caption'],
        ]);

        $response->assertSessionHasNoErrors();
        $this->assertSame(1, Girl::count(), 'The model record was not created.');

        $image = GirlImage::first();
        $this->assertNotNull($image, 'No image row was written.');

        $full = $this->uploads.'/girls/'.$image->image;
        $thumb = $this->uploads.'/girls/thumbs/'.$image->image;

        $this->assertFileExists($full, 'The watermarked image was not written.');
        $this->assertFileExists($thumb, 'The thumbnail was not written.');

        $this->assertSame([300, 300], [
            Image::read($thumb)->width(),
            Image::read($thumb)->height(),
        ], 'cover(300, 300) did not produce a 300x300 thumbnail.');
    }

    public function test_the_stored_name_is_rebuilt_rather_than_taken_from_the_client(): void
    {
        [$cityId, $hairId, $eyeId] = $this->lookups();

        $this->actingAsAdmin()->post('/admin/girls', [
            'name' => 'Test Model',
            'city' => $cityId,
            'hair_color' => $hairId,
            'eye_color' => $eyeId,
            'images' => [UploadedFile::fake()->image('holiday snap.jpg', 400, 400)],
            'en' => ['caption'],
            'es' => ['caption'],
        ]);

        $stored = GirlImage::first()->image;

        $this->assertStringNotContainsString('holiday', $stored);
        $this->assertStringNotContainsString(' ', $stored, 'Stored names must not contain spaces.');
        $this->assertMatchesRegularExpression('/^\d+_[0-9a-f]{16}\.jpg$/', $stored);
    }

    public function test_a_php_file_disguised_as_an_image_is_rejected(): void
    {
        [$cityId, $hairId, $eyeId] = $this->lookups();

        $response = $this->actingAsAdmin()->post('/admin/girls', [
            'name' => 'Test Model',
            'city' => $cityId,
            'hair_color' => $hairId,
            'eye_color' => $eyeId,
            'images' => [UploadedFile::fake()->createWithContent('shell.php', '<?php echo 42;')],
            'en' => ['caption'],
            'es' => ['caption'],
        ]);

        $response->assertSessionHasErrors('images.0');
        $this->assertSame(0, GirlImage::count(), 'A non-image upload was stored.');
        $this->assertFileDoesNotExist($this->uploads.'/girls/shell.php');
    }
}

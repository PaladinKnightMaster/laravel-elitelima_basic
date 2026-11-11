<?php

namespace Tests\Feature;

use App\Admin;
use App\City;
use App\Country;
use App\EyeColor;
use App\Girl;
use App\HairColor;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

/**
 * The admin "models" form against the schema production actually has.
 *
 * `girls` exists in two shapes. The migration defines 50 columns, including a
 * NOT NULL `slug`. The database restored from the cPanel dump, which is what
 * deploy/README.md tells you to use, has 31 and no `slug`. Every other table
 * agrees between the two. CI builds from migrations, so code that quietly
 * assumes a migration-only column passes every test and then fails in
 * production. This class reshapes the table to the production layout first.
 */
class GirlsProductionSchemaTest extends TestCase
{
    use RefreshDatabase;

    /** Columns the migration creates on girls that the production table lacks. */
    private const MIGRATION_ONLY = [
        'anal', 'available', 'blow_job', 'body_type', 'drinking', 'ethnicity',
        'kissing', 'measurement', 'messenger_id', 'messenger_type', 'orientation',
        'pal_talk', 'parejas', 'rates', 'sixty_nine', 'slug', 'smoking', 'type',
        'website',
    ];

    private int $city;
    private int $hair;
    private int $eye;

    protected function setUp(): void
    {
        parent::setUp();

        Schema::table('girls', function (Blueprint $table) {
            $table->dropUnique(['slug']);
        });
        Schema::dropColumns('girls', self::MIGRATION_ONLY);

        $country = new Country();
        $country->name = 'Peru';
        $country->save();

        $city = new City();
        $city->name = 'Lima';
        $city->slug = 'lima';
        $city->country_id = $country->id;
        $city->save();
        $this->city = $city->id;

        $hair = new HairColor();
        $hair->name = $hair->english = $hair->spanish = 'Black';
        $hair->save();
        $this->hair = $hair->id;

        $eye = new EyeColor();
        $eye->name = $eye->english = $eye->spanish = 'Brown';
        $eye->save();
        $this->eye = $eye->id;

        $admin = Admin::create([
            'name' => 'Test Admin',
            'email' => 'admin@example.test',
            'password' => bcrypt('x'),
            'role' => 1,
        ]);
        $this->actingAs($admin, 'admin');
    }

    private function form(array $over = []): array
    {
        return $over + [
            'name' => 'Ana Maria',
            'status' => '1',
            'city' => $this->city,
            'hair_color' => $this->hair,
            'eye_color' => $this->eye,
        ];
    }

    public function test_the_table_really_has_the_production_shape(): void
    {
        // Guards the guard: if this reshape silently did nothing, every test
        // below would be testing the migration schema again.
        $this->assertFalse(Schema::hasColumn('girls', 'slug'));
        $this->assertCount(31, Schema::getColumnListing('girls'));
    }

    public function test_a_model_can_be_created_without_a_photo(): void
    {
        $response = $this->post('/admin/girls', $this->form());

        $response->assertSessionHasNoErrors();
        $response->assertSessionHas('success_message');
        $this->assertSame(1, Girl::count());
    }

    public function test_a_model_can_be_updated(): void
    {
        $girl = new Girl();
        $girl->name = 'Old Name';
        $girl->status = '1';
        $girl->city_id = $this->city;
        $girl->hair_color = $this->hair;
        $girl->eye_color = $this->eye;
        $girl->save();

        $response = $this->put('/admin/girls/'.$girl->id, $this->form(['name' => 'New Name']));

        $response->assertSessionHasNoErrors();
        $response->assertSessionHas('success_message');
        $this->assertSame('New Name', $girl->fresh()->name);
    }

    public function test_a_bad_photo_rejects_the_submission_without_saving_a_half_finished_model(): void
    {
        $response = $this->post('/admin/girls', $this->form([
            'images' => [UploadedFile::fake()->createWithContent('shell.php', '<?php echo 42;')],
            'en' => ['caption'],
            'es' => ['caption'],
        ]));

        $response->assertSessionHasErrors('images.0');

        // Validation used to run after the model was saved, so the admin saw an
        // error but a model existed anyway, and fixing the photo and resubmitting
        // created a second copy.
        $this->assertSame(0, Girl::count(), 'The model was saved even though its photo was rejected.');
    }
}

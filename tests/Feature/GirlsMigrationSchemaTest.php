<?php

namespace Tests\Feature;

use App\Admin;
use App\City;
use App\Country;
use App\EyeColor;
use App\Girl;
use App\HairColor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

/**
 * The other half of GirlsProductionSchemaTest: a database built from the
 * migrations, as the development stack and CI build it. There `girls.slug`
 * exists, and used to be NOT NULL with nothing ever filling it in.
 */
class GirlsMigrationSchemaTest extends TestCase
{
    use RefreshDatabase;

    public function test_models_can_be_created_when_the_slug_column_exists(): void
    {
        $this->assertTrue(Schema::hasColumn('girls', 'slug'), 'Expected the migration-built schema, which has a slug column.');

        $country = new Country();
        $country->name = 'Peru';
        $country->save();

        $city = new City();
        $city->name = 'Lima';
        $city->slug = 'lima';
        $city->country_id = $country->id;
        $city->save();

        $hair = new HairColor();
        $hair->name = $hair->english = $hair->spanish = 'Black';
        $hair->save();

        $eye = new EyeColor();
        $eye->name = $eye->english = $eye->spanish = 'Brown';
        $eye->save();

        $this->actingAs(Admin::create([
            'name' => 'Test Admin', 'email' => 'admin@example.test', 'password' => bcrypt('x'), 'role' => 1,
        ]), 'admin');

        $form = [
            'name' => 'Ana Maria', 'status' => '1', 'city' => $city->id,
            'hair_color' => $hair->id, 'eye_color' => $eye->id,
        ];

        // Twice, with the same name. A unique slug column must not turn the
        // second one into a collision, which is what NULLs being distinct is for.
        $this->post('/admin/girls', $form)->assertSessionHasNoErrors()->assertSessionHas('success_message');
        $this->post('/admin/girls', $form)->assertSessionHasNoErrors()->assertSessionHas('success_message');

        $this->assertSame(2, Girl::count());
    }
}

<?php

namespace Tests\Feature;

use App\City;
use App\Country;
use App\EyeColor;
use App\Girl;
use App\HairColor;
use App\Http\Controllers\Theme\HomeController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

/**
 * The public search form, English and Spanish.
 *
 * The handlers are called directly and the view's data inspected, rather than
 * requested over HTTP and rendered. The English page's navigation links to
 * routes that do not exist, which fails the render for reasons unrelated to
 * what is being tested here.
 */
class PublicSearchTest extends TestCase
{
    use RefreshDatabase;

    private int $city;
    private int $eye;
    private int $hairA;
    private int $hairB;

    protected function setUp(): void
    {
        parent::setUp();

        $country = new Country();
        $country->name = 'Peru';
        $country->save();

        $city = new City();
        $city->name = 'Lima';
        $city->slug = 'lima';
        $city->country_id = $country->id;
        $city->save();
        $this->city = $city->id;

        $eye = new EyeColor();
        $eye->name = 'Brown';
        $eye->english = 'Brown';
        $eye->spanish = 'Marron';
        $eye->save();
        $this->eye = $eye->id;

        $this->hairA = $this->hair('Black');
        $this->hairB = $this->hair('Blonde');
    }

    private function hair(string $name): int
    {
        $hair = new HairColor();
        $hair->name = $name;
        $hair->english = $name;
        $hair->spanish = $name;
        $hair->save();

        return $hair->id;
    }

    private function girl(string $name, string $status, int $hair, string $age): void
    {
        $girl = new Girl();
        $girl->name = $name;
        $girl->slug = Str::slug($name);
        $girl->status = $status;
        $girl->hair_color = $hair;
        $girl->eye_color = $this->eye;
        $girl->city_id = $this->city;
        $girl->age = $age;
        $girl->save();
    }

    /** @return list<string> names returned by the given handler, sorted */
    private function search(string $handler, array $input): array
    {
        $request = Request::create('/models-hostess-search', 'POST', $input + [
            'hair' => '', 'age' => '', 'height' => '', 'breast' => '',
        ]);

        $view = app(HomeController::class)->{$handler}($request);

        return $view->getData()['girls']->pluck('name')->sort()->values()->all();
    }

    public static function handlers(): array
    {
        return ['english' => ['searchGirls'], 'spanish' => ['searchGirlsEs']];
    }

    #[DataProvider('handlers')]
    public function test_an_inactive_model_never_appears_in_results(string $handler): void
    {
        $this->girl('Alice', '1', $this->hairA, '25');
        // Inactive, but she matches the age band, which used to be enough:
        // the OR'd filters sat beside status = 1 instead of inside a group.
        $this->girl('Bella', '0', $this->hairB, '25');

        $found = $this->search($handler, ['hair' => $this->hairA, 'age' => '20_30']);

        $this->assertNotContains('Bella', $found, 'An inactive model was returned by public search.');
        $this->assertContains('Alice', $found);
    }

    #[DataProvider('handlers')]
    public function test_filters_are_still_ored_together(string $handler): void
    {
        $this->girl('Alice', '1', $this->hairA, '25');
        // Active, wrong hair colour, right age: matches on age alone. That is
        // how the form has always behaved, so it must keep working.
        $this->girl('Chloe', '1', $this->hairB, '25');
        // Active and matches nothing at all.
        $this->girl('Dana', '1', $this->hairB, '50');

        $found = $this->search($handler, ['hair' => $this->hairA, 'age' => '20_30']);

        $this->assertSame(['Alice', 'Chloe'], $found);
    }
}

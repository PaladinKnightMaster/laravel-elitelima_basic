<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/clear',function(){
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
});

Route::get('/', function () {
    //return view('welcome');
    return redirect()->route('home');
});

Auth::routes();
Route::get('/login', function () {
    return view("welcome");
})->name("login");
Route::get('/register', function () {
    return view("welcome");
});
Route::get('/', 'Theme\HomeController@indexES')->name('home');
Route::get('en', 'Theme\HomeController@index')->name('home-en');
Route::get('es', 'Theme\HomeController@indexES')->name('home-es');
Route::get('models-hostess', 'Theme\HomeController@showGirls')->name('girls');
Route::get('videos', 'Theme\HomeController@videos')->name('videos');
Route::get('videos-es', 'Theme\HomeController@videosEs')->name('videos-es');
Route::get('models-hostess/es', 'Theme\HomeController@showGirlsES')->name('girls-es');
Route::post('models-hostess-search', 'Theme\HomeController@searchGirls')->name('search-models-en');
Route::post('models-hostess-search/es', 'Theme\HomeController@searchGirlsEs')->name('search-models-es');
Route::get('agency', 'Theme\HomeController@showAgency')->name('agency');
Route::get('agency/es', 'Theme\HomeController@showAgencyEs')->name('agency-es');
Route::get('sitemap', 'Theme\HomeController@sitemap')->name('sitemap');
Route::get('sitemap/es', 'Theme\HomeController@sitemapEs')->name('sitemap-es');
Route::get('girls/{slug}','Theme\HomeController@singleGirl')->where('slug','[\w\d\-\_]+');
Route::get('girls/{slug}/es','Theme\HomeController@singleGirlEs')->where('slug','[\w\d\-\_]+');
//Route::get('get-pound', 'Theme\HomeController@GetPoundEuro')->name('get-pound');




Route::prefix('admin')->group(function() {
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/dashboard', 'AdminController@index')->name('admin.dashboard');
    Route::get('/profile/{id}', 'AdminController@edit')->name('admin-profile');
    Route::patch('/update/{id}', 'AdminController@update')->name('admin-update');
    Route::get('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');

    // Password reset routes
    // Route::post('/password/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::post('/password/email', 'Auth\AdminForgotPasswordController@SendPasswordResetLink')->name('admin.password.email');
    Route::get('/password/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset', 'Auth\AdminResetPasswordController@reset');
    Route::get('/password/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');



});
Route::group([
    'middleware'    => ['auth:admin'],
    'prefix'        => 'admin',
    'namespace'     => 'Admin'
], function ()
{

    //User Routes
    Route::resource('users','UsersController');
    Route::get('users/edit/{id}', 'UsersController@edit')->name('company-edit');
    Route::post('get-users', 'UsersController@getUsers')->name('admin.getUsers');
    Route::get('users/delete/{id}', 'UsersController@destroy')->name('user-delete');
    Route::post('delete-selected-users', 'UsersController@DeleteSelectedUsers')->name('delete-selected-users');
    Route::get('edit-profile/{id}', 'UsersController@show')->name('edit-profile');

    //Country Routes
    Route::resource('countries','CountriesController');
    Route::get('countries/edit/{id}', 'CountriesController@edit')->name('countries-edit');
    Route::post('get-countries', 'CountriesController@getCountries')->name('admin-getAddedCountries');
    Route::get('countries/delete/{id}', 'CountriesController@destroy')->name('user-delete');
    Route::post('delete-selected-countries', 'CountriesController@DeleteSelectedCountries')->name('delete-selected-countries');
    Route::post('countries/detail', 'CountriesController@getCounrtyDetail')->name('admin-getCountries');


    //Cities Routes
    Route::resource('cities','CitiesController');
    Route::get('cities/edit/{id}', 'CitiesController@edit')->name('cities-edit');
    Route::post('get-cities', 'CitiesController@getCities')->name('admin-getAddedCities');
    Route::get('cities/delete/{id}', 'CitiesController@destroy')->name('user-delete');
    Route::post('delete-selected-cities', 'CitiesController@DeleteSelectedCities')->name('delete-selected-cities');
    Route::post('cities/detail', 'CitiesController@getCityDetail')->name('admin-getCities');

     //Agency Routes
    Route::resource('agency','AgencyController');


    //Hair Routes
    Route::resource('hairs','HairsController');
    Route::get('hairs/edit/{id}', 'HairsController@edit')->name('hairs-edit');
    Route::post('get-hairs', 'HairsController@getHairs')->name('admin-getAddedHairs');
    Route::get('hairs/delete/{id}', 'HairsController@destroy')->name('hairs-delete');
    Route::post('delete-selected-hairs', 'HairsController@DeleteSelectedHairs')->name('delete-selected-hairs');
    Route::post('hairs/detail', 'HairsController@getHairDetail')->name('admin-getHairs');

    //Eye Routes
    Route::resource('eyes','EyesController');
    Route::get('eyes/edit/{id}', 'EyesController@edit')->name('eyes-edit');
    Route::post('get-eyes', 'EyesController@getEyes')->name('admin-getAddedEyes');
    Route::get('eyes/delete/{id}', 'EyesController@destroy')->name('eyes-delete');
    Route::post('delete-selected-eyes', 'EyesController@DeleteSelectedEyes')->name('delete-selected-eyes');
    Route::post('eyes/detail', 'EyesController@getEyeDetail')->name('admin-getEyes');

    //Eye Routes
    Route::resource('constants','ConstantsController');
    Route::get('constants/edit/{id}', 'ConstantsController@edit')->name('constants-edit');
    Route::post('get-constants', 'ConstantsController@getConstants')->name('admin-getAddedConstants');
    Route::get('constants/delete/{id}', 'ConstantsController@destroy')->name('constants-delete');
    Route::post('delete-selected-constants', 'ConstantsController@DeleteSelectedConstants')->name('delete-selected-constants');
    Route::post('constants/detail', 'ConstantsController@getConstantDetail')->name('admin-getConstants');

    //Girls Routes
    Route::resource('girls','GirlsController');
    Route::get('girls/edit/{id}', 'GirlsController@edit')->name('girls-edit');
    Route::post('get-girls', 'GirlsController@getGirls')->name('admin-getAddedGirls');
    Route::get('girls/delete/{id}', 'GirlsController@destroy')->name('girls-delete');
    Route::post('delete-selected-girls', 'GirlsController@DeleteSelectedGirls')->name('delete-selected-girls');
    Route::post('girls/detail', 'GirlsController@getGirlDetail')->name('admin-getGirls');
    Route::get('girl-image/delete/{id}', 'GirlsController@girlImageDelete')->name('admin.delete-girl-image');

    //Pages Routes
    Route::resource('pages','PagesController');
    Route::get('pages/edit/{id}', 'PagesController@edit')->name('pages-edit');
    Route::post('get-pages', 'PagesController@getPages')->name('admin-getAddedPages');
    Route::get('pages/delete/{id}', 'PagesController@destroy')->name('pages-delete');
    Route::post('delete-selected-pages', 'PagesController@DeleteSelectedPages')->name('delete-selected-pages');
    Route::post('pages/detail', 'PagesController@getPageDetail')->name('admin-getPages');

    //Videos Routes
    Route::resource('videos','VideosController');
    Route::get('videos/edit/{id}', 'VideosController@edit')->name('videos-edit');
    Route::post('get-videos', 'VideosController@getVideos')->name('admin-getAddedVideos');
    Route::get('videos/delete/{id}', 'VideosController@destroy')->name('videos-delete');
    Route::post('delete-selected-videos', 'VideosController@DeleteSelectedVideos')->name('delete-selected-videos');
    Route::post('videos/detail', 'VideosController@getVideoDetail')->name('admin-getVideos');



    //Setting Routes
    Route::resource('settings','SettingsController');
});

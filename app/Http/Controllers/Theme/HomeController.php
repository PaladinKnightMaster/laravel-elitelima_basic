<?php

namespace App\Http\Controllers\Theme;

use App\ActiveTheme;
use App\AffiliateMember;
use App\Agency;
use App\Category;
use App\Client;
use App\ClientFeedBack;
use App\Discount;
use App\EyeColor;
use App\Feature;
use App\FormInput;
use App\Girl;
use App\HairColor;
use App\HomeConcept;
use App\HomeSlide;
use App\InputOption;
use App\ItemPrice;
use App\MenuItem;
use App\Order;
use App\OrderPrice;
use App\Page;
use App\Portfolio;
use App\PortfolioCategory;
use App\PortfolioImage;
use App\Post;
use App\PriceInput;
use App\Service;
use App\ServiceItem;
use App\Setting;
use App\Slider;
use App\Tag;
use App\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;
use Mail;
use File;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $settings;
    public function __construct()
    {
		 $path = storage_path().'\framework\views';
		 File::cleanDirectory($path);
        $this->settings = Setting::pluck('value','name')->toArray();
    }

    public function index()
    {
        $girls = Girl::where('status',1)->get();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.index',['title' => 'home','settings'=>$settings,'girls'=>$girls,]);
    }
    public function indexEs()
    {
        $girls = Girl::where('status',1)->get();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.index',['title' => 'inicio','settings'=>$settings,'girls'=>$girls,]);
    }


    public function showGirls()
    {
        $girls = Girl::where('status',1)->get();
        $hairs = HairColor::all();
        $eyes = EyeColor::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.girls',['title' => 'Models','settings'=>$settings,'girls'=>$girls,'eyes'=>$eyes,'hairs'=>$hairs,]);
    }
    public function showGirlsEs()
    {
        $girls = Girl::where('status',1)->get();
        $hairs = HairColor::all();
        $eyes = EyeColor::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.girls',['title' => 'Modelos','settings'=>$settings,'girls'=>$girls,'eyes'=>$eyes,'hairs'=>$hairs,]);
    }

    public function videos()
    {
        $videos = Video::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.videos',['title' => 'Videos','settings'=>$settings,'videos'=>$videos,]);
    }

    public function videosEs()
    {
        $videos = Video::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.videos',['title' => 'Videos','settings'=>$settings,'videos'=>$videos,]);
    }

    public function sitemap()
    {
        $girls = Girl::where('status',1)->get();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.sitemap',['title' => 'Sitemap','settings'=>$settings,'girls'=>$girls,]);
    }

    public function sitemapEs()
    {
        $girls = Girl::where('status',1)->get();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.sitemap',['title' => 'Sitemap','settings'=>$settings,'girls'=>$girls,]);
    }

    /**
     * Run the public search form and return the matching active models.
     *
     * The filters (hair colour, age band, breast, height band) are OR'd
     * together: a model matches if she satisfies any one of them. That is how
     * the form has always behaved and is preserved here.
     *
     * What they must not be able to do is escape the status filter. They used
     * to, because the orWhere clauses sat at the top level beside
     * `status = 1` instead of inside a group. SQL binds AND tighter than OR, so
     * the query meant "(status = 1 AND hair) OR age OR breast OR height", and
     * any inactive model that matched on age, breast or height was returned to
     * the public.
     */
    private function searchActiveGirls(Request $request)
    {
        $hair = $request->input("hair");
        $breast = $request->input("breast");
        $age = explode('_', (string) $request->input("age"));
        $height = explode('_', (string) $request->input("height"));

        $age1 = $age[0] ?? "";
        $age2 = $age[1] ?? "";
        $hgt1 = $height[0] ?? "";
        $hgt2 = $height[1] ?? "";

        return Girl::where('status', 1)
            ->where(function ($query) use ($hair, $breast, $age1, $age2, $hgt1, $hgt2) {
                $query->where('hair_color', $hair)
                    ->orWhereBetween('age', array($age1, $age2))
                    ->orWhere('breast', $breast)
                    ->orWhereBetween('height', array($hgt1, $hgt2));
            })
            ->get();
    }

    public function searchGirls(Request $request)
    {
        $girls = $this->searchActiveGirls($request);
        $hairs = HairColor::all();
        $eyes = EyeColor::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.girls',['title' => 'Models','settings'=>$settings,'girls'=>$girls,'eyes'=>$eyes,'hairs'=>$hairs,]);
    }
    public function searchGirlsEs(Request $request)
    {
        $girls = $this->searchActiveGirls($request);
        $hairs = HairColor::all();
        $eyes = EyeColor::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.girls',['title' => 'Modelos','settings'=>$settings,'girls'=>$girls,'eyes'=>$eyes,'hairs'=>$hairs,]);
    }

    public function showAgency()
    {
        $agency = Agency::findOrFail(1);
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.agency',['title' => 'Agency','settings'=>$settings,'agency'=>$agency,]);
    }
    public function showAgencyEs()
    {
        $agency = Agency::findOrFail(1);
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.agency',['title' => 'AGENCIA','settings'=>$settings,'agency'=>$agency,]);
    }

    public function singleGirl($slug)
    {
       // dd($slug);
        $girl = Girl::where('id','=',$slug)->first();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.show-girl', ['title' => $girl->name,'girl'=>$girl,'settings'=>$settings]);
    }



    public function singleGirlEs($slug)
    {
        $girl = Girl::where('id','=',$slug)->first();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.spanish.show-girl', ['title' => $girl->name,'girl'=>$girl,'settings'=>$settings]);
    }





    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ContactUsForm(){
        $settings = Setting::pluck('value','name')->toArray();

        $main_menu = MenuItem::where('menu_id',1)->get();
        $footer_menu = MenuItem::where('menu_id',2)->get();

        $theme = ActiveTheme::findOrFail(1);
        $name = $theme->name;
        return view('themes.'.$name.'.home.contact-us',['settings'=>$settings,'title'=>'Contact Us','main_menu'=>$main_menu,'footer_menu'=>$footer_menu,]);
    }



    public function create()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}

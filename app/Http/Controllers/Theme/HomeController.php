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

    public function searchGirls(Request $request)
    {
        $hair = $request->input("hair");
        $height = $request->input("height");
        $breast = $request->input("breast");
        $age = $request->input("age");
        $data = explode('_', $age);
        $HGT = explode('_', $height);
        $hgt1 = isset($HGT[0])? $HGT[0]:"";
        $hgt2 = isset($HGT[1])? $HGT[1]:"";
        $age1 = isset($data[0])? $data[0]:"";
        $age2 = isset($data[1])? $data[1]:"";
        $girls = Girl::where('status',1)->where('hair_color',$hair)->orwhereBetween('age',array($age1,$age2))->orwhere('breast',$breast)->orwhereBetween('height',array($hgt1,$hgt2))->get();
        $hairs = HairColor::all();
        $eyes = EyeColor::all();
        $settings = Setting::pluck('value','name')->toArray();
        return view('themes.main-theme.english.girls',['title' => 'Models','settings'=>$settings,'girls'=>$girls,'eyes'=>$eyes,'hairs'=>$hairs,]);
    }
    public function searchGirlsEs(Request $request)
    {
        $hair = $request->input("hair");
        $height = $request->input("height");
        $breast = $request->input("breast");
        $age = $request->input("age");
        $data = explode('_', $age);
        $HGT = explode('_', $height);
        $hgt1 = isset($HGT[0])? $HGT[0]:"";
        $hgt2 = isset($HGT[1])? $HGT[1]:"";
        $age1 = isset($data[0])? $data[0]:"";
        $age2 = isset($data[1])? $data[1]:"";
        $girls = Girl::where('status',1)->where('hair_color',$hair)->orwhereBetween('age',array($age1,$age2))->orwhere('breast',$breast)->orwhereBetween('height',array($hgt1,$hgt2))->get();
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

    public function processContact(Request $request){
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'message' => 'required',
            'g-recaptcha-response' => 'required',
            'g-recaptcha-response.required' => 'Check the ReCaptcha',
        ]);

//dd("working");

        $settings = Setting::pluck('value','name')->toArray();
        if(isset($settings['enquiry_email'])) {
            $enquiry_email = $settings['enquiry_email'];
        }else {
            $enquiry_email = "support@ideal.org.pk";
        }
        if(isset($settings['secret_key'])) {
            $secret_key = $settings['secret_key'];
        }else {
            $secret_key = "6LdoXpIUAAAAAIxbg_1LcghcCLK4QyQJrg3CtVW0";
        }

        $input = $request->all();
        $input = array_map('strip_tags', $input);
        $captcha = $input['g-recaptcha-response'];
        $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret_key&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);

        $data = array(
            'name' => $input['name'],
            'email' => $input['email'],
            'check_email' => isset($input['emailupdates']) ?"Yes":"No" ,
            'subject' => $input['subject'],
            'msg' => $input['message'],
            'admin_email' => $enquiry_email,
        );
        Mail::send('theme.email.contact', $data, function ($message) use ($data) {
            $message->to($data['admin_email'],'')
                ->subject('Contact');
        });
        Session::flash('success_message', 'Success! We received contact us enquiry successfully!');
        return redirect()->back();

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

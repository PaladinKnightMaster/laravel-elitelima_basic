<?php

namespace App\Http\Controllers\Admin;

use App\City;
use App\EyeColor;
use App\Girl;
use App\GirlImage;
use App\HairColor;
use App\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;
use File;
use Image;

class GirlsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:admin');

    }

    public function index(Request $request)
    {
//dd("working");
        return view('admin.girls.index', ['title' => 'Girls List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = [''=>"Select City"] + City::pluck('name','id')->toArray();
        $hairs = [''=>"Select Hair Color"] + HairColor::pluck('name','id')->toArray();
        $eyes = [''=>"Select Eye Color"] + EyeColor::pluck('name','id')->toArray();
        return view('admin.girls.create', ['title' => 'Add Girl','categories' => $categories,'hairs' => $hairs,'eyes' => $eyes]);
    }

    public function getGirls(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = Girl::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $girls = Girl::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Girl::count();
        } else {
            $search = $request->input('search.value');
            $girls= Girl::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Girl::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($girls);
        if ($girls) {
            foreach ($girls as $r) {
                $edit_url = route('girls.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="girl_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Girl" class="btn btn-success btn-outline btn-circle btn-lg m-r-5"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    
                                    <a class="btn btn-danger btn-outline btn-circle btn-lg m-r-5" onclick="event.preventDefault();del('.$r->id.');" title="Delete Girl" href="#">
                                        <i class="icon-trash"></i>
                                    </a>
                                </td>
                                </div> 
                            ';
                $data[] = $nestedData;
            }
        }

        $json_data = array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data
        );

        echo json_encode($json_data);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function rules($request)
    {
        $photos = count($request['images']);
        foreach(range(0, $photos) as $index) {
            $rules['images.' . $index] = 'image|mimes:jpeg,bmp,png|max:2000';
        }

        return $rules;
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'hair_color' => 'required',
            'eye_color' => 'required',
            'city' => 'required',
        ]);
//        dd($request->all());
        $settings = Setting::pluck('value', 'name')->all();
        if (isset($settings['banner'])){
            $watermark = $settings['banner'];
        }else{
            $watermark= "placeholder.png";
        }
        $data = $request->all();

        $girl = new  Girl();
        $girl->name = $request->input('name');
        $girl->city_id = $request->input('city');
        $girl->status = $request->input('status');
        $girl->height = $request->input('height');
        $girl->hair_color = $request->input('hair_color');
        $girl->languages = $request->input('languages');
        $girl->phone = $request->input('phone');
        $girl->nationality = $request->input('nationality');
        $girl->weight = $request->input('weight');
        $girl->eye_color = $request->input('eye_color');
        $girl->age = $request->input('age');
        $girl->email = $request->input('email');
        $girl->username = $request->input('username');
        $girl->password = $request->input('password');
        $girl->breast = $request->input('breast');
        $girl->meta_title = $request->input('meta_title');
        $girl->meta_title_es = $request->input('meta_title_es');
        $girl->meta_keyword = $request->input('meta_keyword');
        $girl->meta_keyword_es = $request->input('meta_keyword_es');
        $girl->meta_description = $request->input('meta_description');
        $girl->meta_description_es = $request->input('meta_description_es');
        $girl->profile = $request->input('profile');
        $girl->profile_es = $request->input('profile_es');
        $girl->save();
        //Saving Images

        if(count($request->images )> 0) {
            if ($this->rules($request->all())){
                foreach ($request->images as $key => $image) {
                    $destinationPath = base_path()."/uploads/girls";
                    $extension = $image->getClientOriginalExtension();
                    $fileName = $image->getClientOriginalName();
                    $fileName = time() . $fileName;
                    $image->move($destinationPath, $fileName);
                    $girl_image = new GirlImage();
                    $girl_image->girl_id = $girl->id;
                    $girl_image->image = $fileName;
                    $girl_image->en = $data["en"][$key];
                    $girl_image->es = $data["es"][$key];
                    $girl_image->save();

                    $c_image = base_path()."/uploads/girls/".$girl_image->image;
                    $img = Image::make($c_image);
                    $waterMark = base_path()."/uploads/".$watermark;
                    $waterMark = Image::make($waterMark);
                    $watermarkSize = $img->width() - 20;
                    $waterMark->resize($watermarkSize, null, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    // and insert a watermark for example
                    $img->insert($waterMark, 'center');
                    // finally we save the image as a new file
                    $newImage = base_path()."/uploads/girls/".$girl_image->image;
                    $img->save($newImage);
//                    $image;
                    $thumb_image = Image::make($newImage);
                    $thumb_image->fit(300);
                    $newThumb = base_path()."/uploads/girls/thumbs/".$girl_image->image;
                    $thumb_image->save($newThumb);
                }
            }

        }

        Session::flash('success_message', 'Success! Girl has been saved successfully!');
        return redirect()->back();

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
        $girl = Girl::findOrFail($id);
        $cities = [''=>"Select City"] + City::pluck('name','id')->toArray();
        $hairs = [''=>"Select Hair Color"] + HairColor::pluck('name','id')->toArray();
        $eyes = [''=>"Select Eye Color"] + EyeColor::pluck('name','id')->toArray();
        return view('admin.girls.edit', ['title' => 'Update Girls Details','cities'=>$cities,'girl'=>$girl,'hairs' => $hairs,'eyes' => $eyes]);
    }

    public function girlImageDelete($id)
    {
        $productImage =  GirlImage::where('id',$id)->first();

        if ($productImage)
        {
            $productImage->delete();
            $delete_old_file=base_path()."/uploads/girls/".$productImage->image;
            File::delete($delete_old_file);
        }
        Session::flash('success_message', 'Success! Girl Image successfully deleted!');
        /*$redirectUrl = 'admin/available-products/'.$availableProductId.'/edit';
        return redirect($redirectUrl);*/
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

        $this->validate($request, [
            'name' => 'required|max:255',
            'city' => 'required',
            'hair_color' => 'required',
            'eye_color' => 'required',
        ]);
//        dd($request->all());
        $settings = Setting::pluck('value', 'name')->all();
        if (isset($settings['banner'])){
            $watermark = $settings['banner'];
        }else{
            $watermark= "placeholder.png";
        }
        $data = $request->all();

        $girl = Girl::findOrFail($id);
        $girl->name = $request->input('name');
        $girl->city_id = $request->input('city');
        $girl->status = $request->input('status');
        $girl->height = $request->input('height');
        $girl->hair_color = $request->input('hair_color');
        $girl->languages = $request->input('languages');
        $girl->phone = $request->input('phone');
        $girl->nationality = $request->input('nationality');
        $girl->weight = $request->input('weight');
        $girl->eye_color = $request->input('eye_color');
        $girl->age = $request->input('age');
        $girl->email = $request->input('email');
        $girl->breast = $request->input('breast');
        $girl->meta_title = $request->input('meta_title');
        $girl->meta_title_es = $request->input('meta_title_es');
        $girl->meta_keyword = $request->input('meta_keyword');
        $girl->meta_keyword_es = $request->input('meta_keyword_es');
        $girl->meta_description = $request->input('meta_description');
        $girl->meta_description_es = $request->input('meta_description_es');
        $girl->profile = $request->input('profile');
        $girl->profile_es = $request->input('profile_es');
        $girl->save();
        //Saving Images
		if(array_key_exists('img_id', $data)) {
            foreach ($request->img_id as $key => $img_id) {
                $girl_o_image =  GirlImage::findOrFail($img_id);
                $girl_o_image->en = $data["en_o"][$key];
                $girl_o_image->es = $data["es_o"][$key];
                $girl_o_image->save();
            }

        }
        if(array_key_exists('images', $data)) {
            if ($this->rules($request->all())){
                foreach ($request->images as $key => $image) {
                    $destinationPath = base_path()."/uploads/girls";
                    $extension = $image->getClientOriginalExtension();
                    $fileName = $image->getClientOriginalName();
                    $fileName = time() . $fileName;
                    $image->move($destinationPath, $fileName);
                    $girl_image = new GirlImage();
                    $girl_image->girl_id = $girl->id;
                    $girl_image->image = $fileName;
                    $girl_image->en = $data["en"][$key];
                    $girl_image->es = $data["es"][$key];
                    $girl_image->save();

                    $c_image = base_path()."/uploads/girls/".$girl_image->image;
                    $img = Image::make($c_image);
                    $waterMark = base_path()."/uploads/".$watermark;
                    $waterMark = Image::make($waterMark);
                    $watermarkSize = $img->width() - 20;
                    $waterMark->resize($watermarkSize, null, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    // and insert a watermark for example
                    $img->insert($waterMark, 'center');
                    // finally we save the image as a new file
                    $newImage = base_path()."/uploads/girls/".$girl_image->image;
                    $img->save($newImage);

                    $thumb_image = Image::make($newImage);
                    $thumb_image->fit(300);
                    $newThumb = base_path()."/uploads/girls/thumbs/".$girl_image->image;
                    $thumb_image->save($newThumb);

                }
            }

        }

        Session::flash('success_message', 'Success! Girl has been Updated successfully!');
        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product =  Girl::findOrFail($id);
        if(isset($product->porfolioimages)){
            foreach($product->porfolioimages as $product_image){
            $product_image->delete();
            $delete_old_file=base_path()."/uploads/girls/".$product_image->image;
            File::delete($delete_old_file);
        } 
        }
       
        $product->delete();
        Session::flash('success_message', 'Girl successfully deleted!');
        return redirect()->route('girls.index');
    }

    public function getGirlDetail(Request $request){

        $girl = Girl::findOrFail($request->input('id'));
        return view('admin.girls.single', ['title' => 'Girl Details'])->withGirls($girl);

    }
    public function DeleteSelectedGirls(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'girl_id' => 'required',

        ]);
        foreach ($input['girl_id'] as $key => $val) {
//            dd("working");
            Girl::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Girls successfully deleted!');
        return redirect()->back();

    }
}

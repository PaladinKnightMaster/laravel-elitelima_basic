<?php

namespace App\Http\Controllers\Admin;

use App\City;
use App\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;

class CitiesController extends Controller
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
        return view('admin.cities.index', ['title' => 'Cities List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $countries = [''=>"Select Countries"] + Country::pluck('name','id')->toArray();
        return view('admin.cities.create', ['title' => 'Add Cities','countries'=>$countries]);
    }

    public function getCities(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = City::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $cities = City::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = City::count();
        } else {
            $search = $request->input('search.value');
            $cities= City::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = City::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($cities);
        if ($cities) {
            foreach ($cities as $r) {
                $edit_url = route('cities.edit', $r->id);


                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="city_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit City" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View City" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete City" href="#">
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
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'slug' => 'required|unique:cities',
            'country' => 'required',
        ]);

        $city = new City();
        $city->name = $request->input('name');
        $city->slug = $request->input('slug');
        $city->country_id = $request->input('country');
        $city->meta_title = $request->input('meta_title');
        $city->meta_keyword = $request->input('meta_keyword');
        $city->meta_description = $request->input('meta_description');
        $city->content = $request->input('content');
        $city->save();

        Session::flash('success_message', 'Success! City has been saved successfully!');
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
        $city = City::findOrFail($id);
        $countries = [''=>"Select Country"] + Country::pluck('name','id')->toArray();
        return view('admin.cities.edit', ['title' => 'Update City Details','city'=>$city,'countries'=>$countries]);
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
            'name' => 'required',
            'slug' => 'required|unique:cities,slug,'. $id .'',
            'country' => 'required',
        ]);
        $input = $request->all();
        $city = City::findOrFail($id);
        $city->name = $request->input('name');
        $city->slug = $request->input('slug');
        $city->country_id = $request->input('country');
        $city->meta_title = $request->input('meta_title');
        $city->meta_keyword = $request->input('meta_keyword');
        $city->meta_description = $request->input('meta_description');
        $city->content = $request->input('content');
        $city->save();

        Session::flash('success_message', 'Success! ServiceItem has been updated successfully!');
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
        $city = City::findOrFail($id);
        $city->delete();
        Session::flash('success_message', 'ServiceItem successfully deleted!');
        return redirect()->route('cities.index');
    }



    public function getCityDetail(Request $request){

        $city = City::findOrFail($request->input('id'));
        return view('admin.cities.single', ['title' => 'City Details','city'=>$city]);

    }
    public function DeleteSelectedCities(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'city_id' => 'required',

        ]);
        foreach ($input['city_id'] as $key => $val) {
//            dd("working");
            City::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Cities successfully deleted!');
        return redirect()->back();

    }
}

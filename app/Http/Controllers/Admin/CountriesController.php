<?php

namespace App\Http\Controllers\Admin;

use App\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;

class CountriesController extends Controller
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
        return view('admin.countries.index', ['title' => 'Services List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.countries.create', ['title' => 'Add Service']);
    }

    public function getCountries(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = Country::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $countries = Country::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Country::count();
        } else {
            $search = $request->input('search.value');
            $countries= Country::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Country::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($countries);
        if ($countries) {
            foreach ($countries as $r) {
                $edit_url = route('countries.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="country-id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['meta_title'] = $r->meta_title;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Countries" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View Countries" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Countries" href="#">
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
            'name' => 'required|max:255',
        ]);
        $country = new Country();
        $country->name = $request->input('name');
        $country->meta_title = $request->input('meta_title');
        $country->meta_keyword = $request->input('meta_keyword');
        $country->meta_description = $request->input('meta_description');
        $country->save();
        Session::flash('success_message', 'Success! Country has been saved successfully!');
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
        $country = Country::findOrFail($id);
        return view('admin.countries.edit', ['title' => 'Update Country Details'])->withCountry($country);
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
        ]);

        $country =  Country::findOrFail($id);
        $country->name = $request->input('name');
        $country->meta_title = $request->input('meta_title');
        $country->meta_keyword = $request->input('meta_keyword');
        $country->meta_description = $request->input('meta_description');
        $country->save();
        Session::flash('success_message', 'Success! Country has been updated successfully!');
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
        $country = Country::findOrFail($id);
        $country->delete();
        Session::flash('success_message', 'Country successfully deleted!');
        return redirect()->route('countries.index');
    }

    public function getCountryDetail(Request $request){

        $country = Country::findOrFail($request->input('id'));
        return view('admin.countries.single', ['title' => 'Country Details'])->withCountry($country);

    }
    public function DeleteSelectedCountries(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'country-id' => 'required',

        ]);
        foreach ($input['country-id'] as $key => $val) {
//            dd("working");
            Country::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Countries successfully deleted!');
        return redirect()->back();

    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\HairColor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;

class HairsController extends Controller
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
        return view('admin.hairs.index', ['title' => 'Hairs List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.hairs.create', ['title' => 'Add Hair']);
    }

    public function getHairs(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = HairColor::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $hairs = HairColor::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = HairColor::count();
        } else {
            $search = $request->input('search.value');
            $hairs= HairColor::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = HairColor::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($hairs);
        if ($hairs) {
            foreach ($hairs as $r) {
                $edit_url = route('hairs.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="hair_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['meta_title'] = $r->meta_title;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Hairs" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View Hairs" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Hairs" href="#">
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
            'english' => 'required|max:255',
            'spanish' => 'required|max:255',
        ]);
        $hair = new HairColor();
        $hair->name = $request->input('name');
        $hair->english = $request->input('english');
        $hair->spanish = $request->input('spanish');
        $hair->save();
        Session::flash('success_message', 'Success! Hair has been saved successfully!');
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
        $hair = HairColor::findOrFail($id);
        return view('admin.hairs.edit', ['title' => 'Update Hair Details'])->withHair($hair);
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
            'english' => 'required|max:255',
            'spanish' => 'required|max:255',
        ]);
        $hair =  HairColor::findOrFail($id);;
        $hair->name = $request->input('name');
        $hair->english = $request->input('english');
        $hair->spanish = $request->input('spanish');
        $hair->save();
        Session::flash('success_message', 'Success! Hair has been updated successfully!');
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
        $hair = HairColor::findOrFail($id);
        $hair->delete();
        Session::flash('success_message', 'Hair successfully deleted!');
        return redirect()->route('hairs.index');
    }

    public function getHairDetail(Request $request){

        $hair = HairColor::findOrFail($request->input('id'));
        return view('admin.hairs.single', ['title' => 'Hair Details'])->withHair($hair);

    }
    public function DeleteSelectedHairs(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'hair_id' => 'required',

        ]);
        foreach ($input['hair_id'] as $key => $val) {
//            dd("working");
            HairColor::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Hairs successfully deleted!');
        return redirect()->back();

    }
}

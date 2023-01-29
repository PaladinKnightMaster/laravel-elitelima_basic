<?php

namespace App\Http\Controllers\Admin;

use App\Constant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;


class ConstantsController extends Controller
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
        return view('admin.constants.index', ['title' => 'Constants List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.constants.create', ['title' => 'Add Constants']);
    }

    public function getConstants(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = Constant::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $contstants = Constant::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Constant::count();
        } else {
            $search = $request->input('search.value');
            $contstants= Constant::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Constant::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($contstants);
        if ($contstants) {
            foreach ($contstants as $r) {
                $edit_url = route('constants.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="constant_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['meta_title'] = $r->meta_title;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Constants" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View Constants" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Constants" href="#">
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
        $contstant = new Constant();
        $contstant->name = $request->input('name');
        $contstant->english = $request->input('english');
        $contstant->spanish = $request->input('spanish');
        $contstant->save();
        Session::flash('success_message', 'Success! Constant has been saved successfully!');
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
        $contstant = Constant::findOrFail($id);
        return view('admin.constants.edit', ['title' => 'Update Constant Details'])->withConstant($contstant);
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
        $contstant =  Constant::findOrFail($id);;
        $contstant->name = $request->input('name');
        $contstant->english = $request->input('english');
        $contstant->spanish = $request->input('spanish');
        $contstant->save();
        Session::flash('success_message', 'Success! Constant has been updated successfully!');
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
        $contstant = Constant::findOrFail($id);
        $contstant->delete();
        Session::flash('success_message', 'Constant successfully deleted!');
        return redirect()->route('constants.index');
    }

    public function getConstantDetail(Request $request){

        $contstant = Constant::findOrFail($request->input('id'));
        return view('admin.constants.single', ['title' => 'Constant Details'])->withConstant($contstant);

    }
    public function DeleteSelectedConstants(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'constant_id' => 'required',

        ]);
        foreach ($input['constant_id'] as $key => $val) {
//            dd("working");
            Constant::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Constants successfully deleted!');
        return redirect()->back();

    }
}

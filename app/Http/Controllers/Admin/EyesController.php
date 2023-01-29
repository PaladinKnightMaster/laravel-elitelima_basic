<?php

namespace App\Http\Controllers\Admin;

use App\EyeColor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;

class EyesController extends Controller
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
        return view('admin.eyes.index', ['title' => 'Eyes List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.eyes.create', ['title' => 'Add Eyes']);
    }

    public function getEyes(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = EyeColor::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $eyes = EyeColor::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = EyeColor::count();
        } else {
            $search = $request->input('search.value');
            $eyes= EyeColor::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = EyeColor::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($eyes);
        if ($eyes) {
            foreach ($eyes as $r) {
                $edit_url = route('eyes.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="eye_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['meta_title'] = $r->meta_title;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Eyes" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View Eyes" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Eyes" href="#">
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
        $eye = new EyeColor();
        $eye->name = $request->input('name');
        $eye->english = $request->input('english');
        $eye->spanish = $request->input('spanish');
        $eye->save();
        Session::flash('success_message', 'Success! Eye has been saved successfully!');
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
        $eye = EyeColor::findOrFail($id);
        return view('admin.eyes.edit', ['title' => 'Update Eye Details'])->withEye($eye);
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
        $eye =  EyeColor::findOrFail($id);;
        $eye->name = $request->input('name');
        $eye->english = $request->input('english');
        $eye->spanish = $request->input('spanish');
        $eye->save();
        Session::flash('success_message', 'Success! Eye has been updated successfully!');
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
        $eye = EyeColor::findOrFail($id);
        $eye->delete();
        Session::flash('success_message', 'Eye successfully deleted!');
        return redirect()->route('eyes.index');
    }

    public function getEyeDetail(Request $request){

        $eye = EyeColor::findOrFail($request->input('id'));
        return view('admin.eyes.single', ['title' => 'Eye Details'])->withEye($eye);

    }
    public function DeleteSelectedEyes(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'eye_id' => 'required',

        ]);
        foreach ($input['eye_id'] as $key => $val) {
//            dd("working");
            EyeColor::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Eyes successfully deleted!');
        return redirect()->back();

    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Page;
use App\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;;

class PagesController extends Controller
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
        return view('admin.pages.index', ['title' => 'Pages List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $countries = [''=>"Select Countries"] + Country::pluck('name','id')->toArray();
        return view('admin.pages.create', ['title' => 'Add Pages','countries'=>$countries]);
    }

    public function getPages(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = Page::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $pages = Page::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Page::count();
        } else {
            $search = $request->input('search.value');
            $pages= Page::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Page::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($pages);
        if ($pages) {
            foreach ($pages as $r) {
                $edit_url = route('pages.edit', $r->id);


                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="page_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Page" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    <a class="btn mtbutton btn-info btn-circle btn-sm" onclick="event.preventDefault();view(' . $r->id . ');" title="View Page" href="#">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Page" href="#">
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
            'slug' => 'required|unique:pages',
        ]);

        $page = new Page();
        $page->name = $request->input('name');
        $page->slug = $request->input('slug');
        $page->page_link = $request->input('page_link');
        $page->meta_title = $request->input('meta_title');
        $page->meta_keyword = $request->input('meta_keyword');
        $page->meta_description = $request->input('meta_description');
        $page->visible = $request->input('visible');
        $page->language = $request->input('language');
        $page->save();

        Session::flash('success_message', 'Success! Page has been saved successfully!');
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
        $page = Page::findOrFail($id);
        $countries = [''=>"Select Country"] + Country::pluck('name','id')->toArray();
        return view('admin.pages.edit', ['title' => 'Update Page Details','page'=>$page,'countries'=>$countries]);
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
            'slug' => 'required|unique:Pages,slug,'. $id .'',
        ]);
        $input = $request->all();
        $page = Page::findOrFail($id);
        $page->name = $request->input('name');
        $page->slug = $request->input('slug');
        $page->page_link = $request->input('page_link');
        $page->meta_title = $request->input('meta_title');
        $page->meta_keyword = $request->input('meta_keyword');
        $page->meta_description = $request->input('meta_description');
        $page->visible = $request->input('visible');
        $page->language = $request->input('language');
        $page->save();

        Session::flash('success_message', 'Success! Page has been updated successfully!');
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
        $page = Page::findOrFail($id);
        $page->delete();
        Session::flash('success_message', 'Page successfully deleted!');
        return redirect()->route('pages.index');
    }



    public function getPageDetail(Request $request){

        $page = Page::findOrFail($request->input('id'));
        return view('admin.pages.single', ['title' => 'Page Details','page'=>$page]);

    }
    public function DeleteSelectedPages(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'page_id' => 'required',

        ]);
        foreach ($input['page_id'] as $key => $val) {
//            dd("working");
            Page::findOrFail($val)->delete();


        }
        Session::flash('success_message', 'Pages successfully deleted!');
        return redirect()->back();

    }
}

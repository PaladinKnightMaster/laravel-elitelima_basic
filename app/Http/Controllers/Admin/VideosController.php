<?php

namespace App\Http\Controllers\Admin;

use App\Video;
use App\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Session;
use File;
use Image;

class VideosController extends Controller
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
        return view('admin.videos.index', ['title' => 'Videos List']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.videos.create', ['title' => 'Add Videos']);
    }

    public function getVideos(Request $request)
    {
//        dd("working");
        $columns = array(
//            0 => 'select',
            0 => 'name',
            7 => 'action'
        );

        $totalData = Video::count();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            $videos = Video::offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Video::count();
        } else {
            $search = $request->input('search.value');
            $videos= Video::where('name', 'like', "%{$search}%")
                ->offset($start)
                ->limit($limit)
                ->orderBy($order, $dir)
                ->get();
            $totalFiltered = Video::where('name', 'like', "%{$search}%")
                ->count();
        }


        $data = array();
//        dd($videos);
        if ($videos) {
            foreach ($videos as $r) {
                $edit_url = route('videos.edit', $r->id);
                $nestedData['select'] = '
                                <td style="text-align: center">
                                    <input type="checkbox" class="ace" name="video_id[]" value="'.$r->id.'">
                                </td>
                            ';
                $nestedData['name'] = $r->name;
                $nestedData['meta_title'] = $r->meta_title;
                $nestedData['action'] = '
                                <div class="text-center">
                                
                                <td>
                                    <a title="Edit Videos" class="btn mtbutton btn-success btn-circle btn-sm"
                                       href="'.$edit_url.'">
                                        <i class="ti-pencil-alt"></i>
                                    </a>
                                    
                                    <a class="btn mtbutton btn-danger btn-circle btn-sm" onclick="event.preventDefault();del('.$r->id.');" title="Delete Videos" href="#">
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
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '2048M');
        ini_set('upload_max_filesize ', '200M');
        ini_set('post_max_size ', '200M');
        $this->validate($request, [
            'name' => 'required|max:255',
            'description' => 'required',
        ]);
        ini_set('max_execution_time', 0);
        //ini_set('memory_limit', '2048M');
        $video = new Video();
        $file = $request->file('poster');
        if ($request->hasFile('poster')) {

            if ($request->file('poster')->isValid()) {
                $this->validate($request, [
                    'poster' => 'required|image|mimes:jpeg,png,jpg'
                ]);
                $destinationPath = base_path()."/uploads/poster/";
                $extension = $file->getClientOriginalExtension('poster');
                $fileName = $file->getClientOriginalName('poster');
                $fileName = time().$fileName;
                //renameing image
                $request->file('poster')->move($destinationPath, $fileName);
                $video->poster = $fileName;
//                $delete_old_file="uploads/poster/".$video->pic;
//                File::delete($delete_old_file);
            }
        }
        if ($request->hasFile('video')) {

            if ($request->file('video')->isValid()) {
                $this->validate($request, [
                    'video' => 'required|mimes:mp4,ogx,oga,ogv,ogg,webm',
                ]);
                $file = $request->file('video');
                $destinationPath = base_path()."/uploads/videos/";
                $extension = $file->getClientOriginalExtension('video');
                $fileName = $file->getClientOriginalName('video');
                $fileName = time().$fileName;
                //renameing image
                $request->file('video')->move($destinationPath, $fileName);
                $video->video = $fileName;
//                $delete_old_file="uploads/poster/".$video->pic;
//                File::delete($delete_old_file);
            }
        }
        $video->name = $request->input('name');
        $video->description = $request->input('description');
        $video->es_name = $request->input('es_name');
        $video->es_description = $request->input('es_description');
        $video->save();
        Session::flash('success_message', 'Success! Video has been saved successfully!');
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
        $video = Video::findOrFail($id);
        return view('admin.videos.edit', ['title' => 'Update Video Details'])->withVideo($video);
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
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '2048M');
        ini_set('upload_max_filesize ', '200M');
        ini_set('post_max_size ', '200M');
        $this->validate($request, [
            'name' => 'required|max:255',
            'description' => 'required',
        ]);
        $video =  Video::findOrFail($id);
        $file = $request->file('poster');
        if ($request->hasFile('poster')) {

            if ($request->file('poster')->isValid()) {
                $this->validate($request, [
                    'poster' => 'required|image|mimes:jpeg,png,jpg'
                ]);

                $destinationPath = base_path()."/uploads/poster/";
                $extension = $file->getClientOriginalExtension('poster');
                $fileName = $file->getClientOriginalName('poster');
                $fileName = time().$fileName;
                //renameing image
                $request->file('poster')->move($destinationPath, $fileName);
                $video->poster = $fileName;
//                $delete_old_file="uploads/poster/".$video->pic;
//                File::delete($delete_old_file);
            }
        }
         if ($request->hasFile('video')) {

            if ($request->file('video')->isValid()) {
                $this->validate($request, [
                    'video' => 'required|mimes:mp4,ogx,oga,ogv,ogg,webm',
                ]);
                 $file = $request->file('video');
                $destinationPath = base_path()."/uploads/videos/";
                $extension = $file->getClientOriginalExtension('video');
                $fileName = $file->getClientOriginalName('video');
                $fileName = time().$fileName;
                //renameing image
                $request->file('video')->move($destinationPath, $fileName);
                $video->video = $fileName;
//                $delete_old_file="uploads/poster/".$video->pic;
//                File::delete($delete_old_file);
            }
        }
        $video->name = $request->input('name');
        $video->description = $request->input('description');
        $video->es_name = $request->input('es_name');
        $video->es_description = $request->input('es_description');
        $video->save();
        Session::flash('success_message', 'Success! Video has been updated successfully!');
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
        $video = Video::findOrFail($id);
        $delete_old_file=base_path()."/uploads/videos/".$video->video;
        File::delete($delete_old_file);
        $video->delete();
        Session::flash('success_message', 'Video successfully deleted!');
        return redirect()->route('videos.index');
    }

    public function getVideoDetail(Request $request){

        $video = Video::findOrFail($request->input('id'));
        return view('admin.videos.single', ['title' => 'Video Details'])->withVideo($video);

    }
    public function DeleteSelectedVideos(Request $request)
    {
//        dd("working");
        $input = $request->all();
        $this->validate($request, [
            'video_id' => 'required',

        ]);
        foreach ($input['video_id'] as $key => $val) {
//            dd("working");
            $video = Video::findOrFail($val);
            $delete_old_file=base_path()."/uploads/videos/".$video->video;
            File::delete($delete_old_file);
            $video->delete();


        }
        Session::flash('success_message', 'Videos successfully deleted!');
        return redirect()->back();

    }
}

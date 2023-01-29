@extends('admin.layouts.master')
@section('content')
    @if(Session::has('success_message'))
        <div class="alert alert-success">
            {{ Session::get('success_message') }}
        </div>
    @endif
    @if($errors->any())
        <div class="alert alert-danger">
            @foreach($errors->all() as $error)
                <p>
                    {{ $error }}
                </p>
            @endforeach
        </div>
    @endif
    <div class="container-fluid">
        <div class="row bg-title">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 class="page-title">{{Request::segment(2)}}</h4>
            </div>
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">

                <ol class="breadcrumb">
                    <li><a href="{{route(Request::segment(2).".index")}}" style="text-transform: capitalize">{{Request::segment(2)}}</a></li>
                    <li class="active" style="text-transform: capitalize">Edit {{Request::segment(2)}}</li>
                </ol>
            </div>
            <!-- /.col-lg-12 -->
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading" style="text-transform: capitalize">Edit {{Request::segment(2)}} </div>
                    <div class="">
                        <div class="col-sm-12" style="background-color: white">
                            {{ Form::model($girl, ['method' => 'PATCH','route' => ['girls.update', $girl->id],'class'=>'form-horizontal','role'=>'form','enctype'=>'multipart/form-data']) }}
                            {{ csrf_field() }}
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('status') ? 'has-error' : '' }}">
                                    {!! Form::label('Status:') !!}
                                    <select name="status" id="" class="form-control">
                                        <option value="0" <?php if($girl->status == 0){ echo "selected"; }else{echo "";} ?>>In Active</option>
                                        <option value="1" <?php if($girl->status == 1){ echo "selected"; }else{echo "";} ?>>Active</option>
                                    </select>
                                    <span class="text-danger">{{ $errors->first('status') }}</span>
                                </div>
                            </div>

                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('name') ? 'has-error' : '' }}">
                                    {!! Form::label('Name:') !!}
                                    {{ Form::text('name', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('name') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('city') ? 'has-error' : '' }}">
                                    {!! Form::label('City:') !!}
                                    {{  Form::select('city', $cities,$girl->city_id, ['class' => 'form-control'])  }}
                                    <span class="text-danger">{{ $errors->first('city') }}</span>
                                </div>
                            </div>

                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('nationality') ? 'has-error' : '' }}">
                                    {!! Form::label('Nationality:') !!}
                                    {{ Form::text('nationality', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('nationality') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('height') ? 'has-error' : '' }}">
                                    {!! Form::label('Height:') !!}
                                    {{ Form::text('height', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('height') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('weight') ? 'has-error' : '' }}">
                                    {!! Form::label('Weight:') !!}
                                    {{ Form::text('weight', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('weight') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('eye_color') ? 'has-error' : '' }}">
                                    {!! Form::label('Eye Color:') !!}
                                    {{  Form::select('eye_color', $eyes,$girl->eye_color, ['class' => 'form-control'])  }}
                                    <span class="text-danger">{{ $errors->first('eye_color') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('hair_color') ? 'has-error' : '' }}">
                                    {!! Form::label('Hair Color:') !!}
                                    {{  Form::select('hair_color', $hairs,$girl->hair_color, ['class' => 'form-control'])  }}
                                    <span class="text-danger">{{ $errors->first('hair_color') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('age') ? 'has-error' : '' }}">
                                    {!! Form::label('Age:') !!}
                                    {{ Form::text('age', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('age') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('languages') ? 'has-error' : '' }}">
                                    {!! Form::label('Languages:') !!}
                                    {{ Form::text('languages', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('languages') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('phone') ? 'has-error' : '' }}">
                                    {!! Form::label('Contact Phone#:') !!}
                                    {{ Form::text('phone', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('phone') }}</span>
                                </div>
                            </div>
                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('email') ? 'has-error' : '' }}">
                                    {!! Form::label('Contact Email:') !!}
                                    {{ Form::text('email', null, ['class' => 'form-control','id'=>'category']) }}
                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                </div>
                            </div>

                            <div class="col-md-4 margin-top">
                                <div class=" {{ $errors->has('breast') ? 'has-error' : '' }}">
                                    {!! Form::label('Breast  Size:') !!}
                                    <select name="breast" id="" class="form-control">
                                        <option value="small" <?php if($girl->breast == "small"){ echo "selected"; }else{echo "";} ?>>Small</option>
                                        <option value="medium" <?php if($girl->breast == "medium"){ echo "selected"; }else{echo "";} ?>>Medium</option>
                                        <option value="big" <?php if($girl->breast == "big"){ echo "selected"; }else{echo "";} ?>>Big</option>
                                        <option value="xbig" <?php if($girl->breast == "xbig"){ echo "selected"; }else{echo "";} ?>>X Big</option>
                                    </select>
                                    <span class="text-danger">{{ $errors->first('breast') }}</span>
                                </div>
                            </div>


                            <div class="col-md-12 margin-top">
                                <div class="">
                                    {!! Form::label('More Picture  (1600 X 1070):') !!}
                                    <button class="add_picture btn btn-success btn-xs">
                                        Add Image +
                                    </button>
                                </div>
                                <div class="margin-top ">
                                    <div class="form-group {{ $errors->has('images') ? 'has-error' : '' }}">
                                        <div class="input_image_fields">
                                            @foreach($girl->images as $image)
                                                <div class="col-sm-12" style="position:relative">
                                                    <a href="{{ route('admin.delete-girl-image',$image->id) }}" class="btn btn-danger btn-xs n_cros"><i class="fa fa-times"></i></a>
                                                    <div class="col-md-4 margin-top">
                                                        <div class=" ">
                                                            <img src="{{asset("uploads/girls/$image->image")}}" alt="" width="100%">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 margin-top">
                                                    <div class=" ">
                                                         <label for="">EN</label>
                                                        <input type="text" name="en_o[]" value="{{$image->en}}" class="form-control" >
                                                        <input type="hidden" name="img_id[]" value="{{$image->id}}" class="form-control" >
                                                    </div>
                                                    </div>

                                                    <div class="col-md-4 margin-top">
                                                        <div class=" ">
                                                            <label for="">ES</label>
                                                            <input type="text" name="es_o[]" value="{{$image->es}}"  class="form-control" >
                                                        </div>
                                                    </div>

                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="panel panel-default">
                                    <div class="panel-wrapper collapse in">
                                        <ul class="nav customtab nav-tabs" role="tablist">
                                            <li role="presentation" class="active"><a href="#home1" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs"> English</span></a></li>
                                            <li role="presentation" class=""><a href="#profile1" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Spanish</span></a></li>
                                        </ul>
                                        <div class="panel-body">
                                            <div class="tab-content m-t-0">
                                                <div role="tabpanel" class="tab-pane fade active in" id="home1">
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_title') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Title:') !!}
                                                            {{ Form::text('meta_title', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_title') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_keyword') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Keyword:') !!}
                                                            {{ Form::textarea('meta_keyword', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_keyword') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_description') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Description:') !!}
                                                            {{ Form::textarea('meta_description', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_description') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('profile') ? 'has-error' : '' }}">
                                                            {!! Form::label('Profile:') !!}
                                                            {{ Form::textarea('profile', null, ['class' => 'summernote','id'=>'Slug','placeholder'=>'Enter content of post.']) }}
                                                            <span class="text-danger">{{ $errors->first('profile') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div role="tabpanel" class="tab-pane fade" id="profile1">
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_title_es') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Title:') !!}
                                                            {{ Form::text('meta_title_es', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_title_es') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_keyword_es') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Keyword:') !!}
                                                            {{ Form::textarea('meta_keyword_es', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_keyword_es') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('meta_description_es') ? 'has-error' : '' }}">
                                                            {!! Form::label('Meta Description:') !!}
                                                            {{ Form::textarea('meta_description_es', null, ['class' => 'form-control','id'=>'Slug']) }}
                                                            <span class="text-danger">{{ $errors->first('meta_description_es') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 margin-top">
                                                        <div class=" {{ $errors->has('profile_es') ? 'has-error' : '' }}">
                                                            {!! Form::label('Profile:') !!}
                                                            {{ Form::textarea('profile_es', null, ['class' => 'summernote','id'=>'Slug','placeholder'=>'Enter content of post.']) }}
                                                            <span class="text-danger">{{ $errors->first('profile_es') }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix form-actions">
                                <div class="col-xs-12 text-center">
                                    <a class="btn btn-danger btn-sm" href="{{ route('girls.index') }}">
                                        <i class="ace-icon fa fa-reply icon-only"></i> Back
                                    </a>
                                    {{ Form::submit('Update', ['class' => 'btn btn-sm btn btn-info', 'title'=>'Click here to Save']) }}
                                </div>
                            </div>
                            {{Form::close()}}
                            <div class="form-group"></div>
                        </div>


                    </div>


                </div>
            </div>
        </div>

    </div>


@stop

@section('stylesheets')
    <link href="{{asset('admin/assets/css/summernote/summernote.css')}}" rel="stylesheet">
    {{--<link href="{{asset('admin/assets/css/summernote/summernote-bs3.css')}}" rel="stylesheet">--}}
    <link href="{{asset('admin/assets/css/select2.css')}}" rel="stylesheet">
    <style type="text/css">
        .margin-top{
            margin-top: 15px;
        }
        .cros{
            position: absolute;
            right: 15px;
            top: 15px;
            z-index: 99;
        }
        .n_cros{
            position: absolute;
            right: 15px;
            top: 15px;
            z-index: 99;
        }
    </style>
@endsection
@section('scripts')
    <script src="{{asset('admin/assets/js/summernote/summernote.min.js')}}"></script>
    <!-- Select2 -->
    <script src="{{asset('admin/assets/js/select2.min.js')}}"></script>

    <script>
        $(document).ready(function () {

            $('.summernote').summernote();
            $(".select-category").select2({
                    placeholder: "Select Categories",
                    allowClear: true
                }
            );
            $(".select-tag").select2({
                    placeholder: "Select Tags",
                    allowClear: true
                }
            );
            $(".seo_btn").checked = false;
            $(".seo_btn").change(function () {
                if(this.checked) {
                    $(".seo_div").show();
                } else {
                    $(".seo_div").hide();
                }
            });


            var max_fields      = 500; //maximum input boxes allowed
            var wrapper         = $(".input_image_fields"); //Fields wrapper
            var add_button      = $(".add_picture"); //Add button ID

            var x = 1; //initlal text box count
            var div ="";
            div +='<div class="col-sm-12" style="position:relative">\n' +
                '                                            <button class="btn btn-danger btn-xs cros"><i class="fa fa-times"></i></button>\n' +
                '                                            <div class="col-md-4 margin-top">\n' +
                '                                                <div class=" ">\n' +
                '                                                    <label for="">Image</label>\n' +
                '                                                    <input type="file" name="images[]" class="form-control">\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="col-md-4 margin-top">\n' +
                '                                                <div class=" ">\n' +
                '                                                    <label for="">EN</label>\n' +
                '                                                    <input type="text" name="en[]" class="form-control">\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div class="col-md-4 margin-top">\n' +
                '                                                <div class=" ">\n' +
                '                                                    <label for="">ES</label>\n' +
                '                                                    <input type="text" name="es[]" class="form-control">\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>';


            $(add_button).click(function(e){ //on add input button click
                e.preventDefault();
                if(x < max_fields){ //max input box allowed
                    x++; //text box increment
                    $(wrapper).prepend(div); //add input box
                }
            });

            $(wrapper).on("click",".cros", function(e){ //user click on remove text
                e.preventDefault(); $(this).parent('div').remove(); x--;
            })

        });


    </script>
@endsection



@extends('admin.layouts.master')
@section('stylesheets')
    <link href="{{asset('admin/assets/css/summernote/summernote.css')}}" rel="stylesheet">
    {{--<link href="{{asset('admin/assets/css/summernote/summernote-bs3.css')}}" rel="stylesheet">--}}
    <link href="{{asset('admin/assets/css/select2.css')}}" rel="stylesheet">
    <style type="text/css">
        .mr-2
        {
            margin-right: 5px;
        }
        .upating-results {
            background: #8bcdeb !important;
            border: 1px solid #8bcdeb !important;
        }
        .d-none
        {
            display: none !important;
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

            $("body").on("click", ".submit-form-btn", function (e) {

                $(this).addClass('upating-results');
                $(this).find('i').removeClass('d-none');
                $(this).find('span').text('Uploading...');
            });
        });
    </script>
@endsection
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
                    <div class="col-sm-12" style="background-color: white">
                        {{ Form::model($video, ['method' => 'PATCH','route' => ['videos.update', $video->id],'class'=>'form-horizontal','role'=>'form','enctype'=>'multipart/form-data',]) }}
                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                                {!! Form::label('Name (In English):') !!}
                                {{ Form::text('name', null, ['class' => 'form-control','id'=>'category']) }}
                                <span class="text-danger">{{ $errors->first('name') }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('es_name') ? 'has-error' : '' }}">
                                {!! Form::label('Name (In Spanish):') !!}
                                {{ Form::text('es_name', null, ['class' => 'form-control','id'=>'category']) }}
                                <span class="text-danger">{{ $errors->first('es_name') }}</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
                                {!! Form::label('Description (In English):') !!}
                                {{ Form::textarea('description', null, ['class' => 'form-control','id'=>'category']) }}
                                <span class="text-danger">{{ $errors->first('description') }}</span>
                            </div>
                        </div>

                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('es_description') ? 'has-error' : '' }}">
                                {!! Form::label('Description (In Spanish):') !!}
                                {{ Form::textarea('es_description', null, ['class' => 'form-control','id'=>'category']) }}
                                <span class="text-danger">{{ $errors->first('es_description') }}</span>
                            </div>
                        </div>


                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('video') ? 'has-error' : '' }}">
                                {!! Form::label('Video File :') !!}
                                {{ Form::file('video', null, ['class' => 'form-control']) }}
                                <span class="text-danger">{{ $errors->first('video') }}</span>
                                <video controls style="max-width: 100%" class="img-thumbnail">
                                    <source src="{{asset("uploads/videos/$video->video")}}" type="video/mp4">
                                </video>
                            </div>
                        </div>


                        <div class="clearfix form-actions">
                            <div class="col-xs-12 text-center">
                                <a class="btn btn-danger btn-sm" href="{{ route('videos.index') }}">
                                    <i class="ace-icon fa fa-reply icon-only"></i> Back
                                </a>
                                <button type="submit" class="btn btn-sm btn btn-info submit-form-btn" title="Click here to Update">
                                    <i class="fa fa-spinner fa-spin mr-2 d-none"></i><span>Update</span>
                                </button>
                            </div>
                        </div>
                        {{Form::close()}}
                        <div class="form-group"></div>
                    </div>

                </div>
            </div>
        </div>

    </div>


@stop



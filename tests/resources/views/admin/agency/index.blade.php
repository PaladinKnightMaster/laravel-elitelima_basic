@extends('admin.layouts.master')
@section('stylesheets')
    <link href="{{asset('admin/assets/css/summernote/summernote.css')}}" rel="stylesheet">
    {{--<link href="{{asset('admin/assets/css/summernote/summernote-bs3.css')}}" rel="stylesheet">--}}
    <link href="{{asset('admin/assets/css/select2.css')}}" rel="stylesheet">
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
                    <li class="active" style="text-transform: capitalize">Update {{Request::segment(2)}}</li>
                </ol>
            </div>
            <!-- /.col-lg-12 -->
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading" style="text-transform: capitalize">Update {{Request::segment(2)}} </div>
                    <div class="col-sm-12" style="background-color: white">
                        {{ Form::model($agency, ['method' => 'PATCH','route' => ['agency.update', $agency->id],'class'=>'form-horizontal','role'=>'form']) }}

                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('content') ? 'has-error' : '' }}">
                                {!! Form::label('Content English:') !!}
                                {{ Form::textarea('content', null, ['class' => 'summernote','id'=>'Slug']) }}
                                <span class="text-danger">{{ $errors->first('content') }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group {{ $errors->has('content_es') ? 'has-error' : '' }}">
                                {!! Form::label('Content Spanish:') !!}
                                {{ Form::textarea('content_es', null, ['class' => 'summernote','id'=>'Slug']) }}
                                <span class="text-danger">{{ $errors->first('content_es') }}</span>
                            </div>
                        </div>




                        <div class="clearfix form-actions">
                            <div class="col-xs-12 text-center">
                                <a class="btn btn-danger btn-sm" href="{{ route('admin.dashboard') }}">
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


@stop



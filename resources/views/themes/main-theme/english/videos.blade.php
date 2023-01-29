@extends('themes.main-theme.layouts.master')

@section('meta_title', 'Elite Lima: Discover the Best Leading Modeling Agency in Peru')
@section('meta_keywords', 'Modelling Agency in Peru, Models Agency')
@section('meta_description', 'Elite Lima is a leading modelling agency in Peru. We manage models of all ages for advertising in newspapers, magazines, commercial, tv, events, fashion shows etc.')
@section('content')
    <?php
    if(isset($settings['logo'])) {
        $logo = $settings['logo'];
    }else {
        $logo = "placeholder.jpg";
    }
    if(isset($settings['contact_number'])) {
        $contact_number = $settings['contact_number'];
    }else {
        $contact_number = "111-2222-55555";
    }
    if(isset($settings['facebook_page_url'])) {
        $facebook_page_url = $settings['facebook_page_url'];
    }else {
        $facebook_page_url = "http://www.facebook.com/";
    }
    if(isset($settings['twitter_url'])) {
        $twitter_url = $settings['twitter_url'];
    }else {
        $twitter_url = "http://www.twitter.com/";
    }
    if(isset($settings['linkedin_url'])) {
        $linkedin_url = $settings['linkedin_url'];
    }else {
        $linkedin_url = "http://www.linkedin.com/";
    }
    if(isset($settings['contact_info'])) {
        $contact_info = $settings['contact_info'];
    }else {
        $contact_info = "loading.....";
    }
    if(isset($settings['email'])) {
        $email = $settings['email'];
    }else {
        $email = "loading.....";
    }
    if(isset($settings['get_in_touch'])) {
        $get_in_touch = $settings['get_in_touch'];
    }else {
        $get_in_touch = "loading.....";
    }
    ?>
    <div
        class="content">
        <div
            class="container-fluid">
            <div
                class="row-fluid">
                <div
                    class="span12">
                    <div
                        class="spacer15"></div>
                    <div>

                    </div>
                    <div
                        class="border"></div>
                    <div
                        class="matter">
                        <div
                            class="slist">
                            <div
                                class="row-fluid"></div>
                        </div>
                    </div>
                    <ul class="thumbnails list" style="margin: 0 0 10px 0px !important;padding: 0px 0px 0px 11% !important; ">
                        @foreach($videos as $video)

                            <li
                                class="span2" style="text-align: left;width: 31%" >
                                <video class='video-js' @if($video->poster) poster="{{asset("uploads/poster/$video->poster")}}" @else preload='auto' @endif width='320px' height='250px'   preload="metadata" controls style="margin-top: 15px;" data-setup='{}'>
                                    <source src="{{asset("uploads/videos/$video->video")}}" type="video/mp4">
                                    Your browser does not support HTML5 video.
                                </video>
                                <p style="margin-top: 15px" class="video-description">{{$video->description}}</p>
                            </li>
                        @endforeach


                    </ul>
                </div>
            </div>
        </div>
    </div>
                <!-- 1 -->


@stop
@section('stylesheets')
    <link rel="stylesheet" href="{{asset("theme/css/video.css")}}">
    <style type="text/css">
        @media screen and (max-width: 767px) {
            .video-description
            {
                display: none !important;
            }
        }
    </style>
@endsection
@section('scripts')
    <script
        src="https://code.jquery.com/jquery-3.4.0.min.js"
        integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
        crossorigin="anonymous"></script>
    <script src="{{asset("theme/js/video_f.js")}}"></script>
    <script src="{{asset("theme/js/video.js")}}"></script>
@endsection

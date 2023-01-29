@extends('themes.main-theme.layouts.master')
<?php

?>

@section('meta_title', 'Discover the Best Models Agency in Lima Peru | Elite Lima')
@section('meta_keywords', 'Models Agency in Lima Peru, Hostesses in Lima Peru')
@section('meta_description', 'One of the top Hostesses agencies in Peru, Elite Lima manages photo shoots, fashion shows, artist bookings for various of its clients.')
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
    <style type="text/css">
        .d-none
        {
            display: none !important;
        }
    </style>
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
                        <div>
                            <div
                                class="span12">
                                <form
                                    method="post" id="" action="{{route("search-models-en")}}">
                                    @csrf
                                    <div
                                        class="well" style="padding: 15px 10px 25px 10px !important; ">
                                        <div
                                            id="" class="span3">
                                            <div
                                                class="input-append">
                                                <select
                                                    name="hair" class="span12">
                                                    <option
                                                        value=''>Hair Color</option>
                                                    @foreach($hairs as $hair)
                                                        <option value="{{$hair->id}}" class="span12 option">{{$hair->english}}</option>
                                                    @endforeach

                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            id="" class="span3">
                                            <div
                                                class="input-append">
                                                <select
                                                    name="age" class="span12">
                                                    <option
                                                        value=''>Age</option>
                                                    <option
                                                        value="18_25" class="span12 option">18 to 25</option>
                                                    <option
                                                        value="25_30" class="span12 option">25 to 30</option>
                                                    <option
                                                        value="30_35" class="span12 option">30 to 35</option>
                                                    <option
                                                        value="35_64" class="span12 option">+ 35</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            id="" class="span3">
                                            <div
                                                class="input-append">
                                                <select
                                                    name="height" class="span12">
                                                    <option
                                                        value=''>Height</option>
                                                    <option
                                                        value="155_160" class="span12 option">155 cm to 160 cm</option>
                                                    <option
                                                        value="160_165" class="span12 option">160 cm to 165 cm</option>
                                                    <option
                                                        value="165_170" class="span12 option">165 cm to 170 cm</option>
                                                    <option
                                                        value="170_175" class="span12 option">170 cm to 175 cm</option>
                                                    <option
                                                        value="175_195" class="span12 option">+ 175 cm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            id="" class="span2">
                                            <div
                                                class="input-append">
                                                <select
                                                    name="breast" class="span12">
                                                    <option
                                                        value=''>Breast size</option>
                                                    <option
                                                        value="small" class="span12 option">Small</option>
                                                    <option
                                                        value="medium" class="span12 option">Medium</option>
                                                    <option
                                                        value="big" class="span12 option">Big</option>
                                                    <option
                                                        value="xbig" class="span12 option">X Big</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            id="" class="span1">
                                            <div
                                                class="input-append" style="margin-top: 0px;"> <input
                                                    type="hidden" name="submitproduct" id="getsearchdata" value="search" class="btn" /><input
                                                    name="button" type="submit" name=searchProduct class="btn" id="button" value="Search" /></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                    <!-- <h2 style="margin-bottom: 30px;">Models for Photoshoot in Lima Peru</h2> -->
                    <ul class="thumbnails list">
                        @foreach($girls as $girl)
                            <?php
                             $image = isset($girl->first_image->image) ? $girl->first_image->image: '';
                             if(empty($image)){
                                continue;
                             }
                             $title = isset($girl->first_image->en) ? $girl->first_image->en:'';
                              ?>

                            <li class="span2" style="text-align: center;" data-name="{{$girl->name}}" data-age="{{$girl->age}}" data-hair="{{$girl->eye_color}}" data-breast="{{$girl->breast}}" data-height="{{$girl->height}}">
                                <a href="{{url('girls/'.$girl->id)}}" title="{{$title}}">
                                    <img src="{{asset("uploads/girls/thumbs/$image")}}" alt="" />
                                    <h3><span>{{$girl->name}}</span></h3>
                                </a>
                            </li>
                        @endforeach


                    </ul>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <h1 style="margin-bottom: 15px;font-size: 18px;">Models and Hostesses Agency in Lima Peru</h1>
                    <a href="javascript:void(0);" class="read-more" style="font-size: 17px; text-decoration: revert;">Read More</a>
                    <div class="read-more-text d-none" style="margin-top: 15px;">
                        <p>Elite Lima is an ace Models Agency in Lima Peru, best known for its top-notch service for Hostesses in Lima Peru for promotions and events. We have a highly efficient workforce and provide the best services to serve your business better.</p>
                        <p>Being a model entails more than just posing for photos and walking down the fashion runway. Your style, beauty and glitz will be used as a promotional item, a marketing campaign, or even a work of art. You'll be the one who catches people's attention so that they notice a specific message and information from the firm that hired you.</p>
                        <p>Our keen sense of listening and observation and a high level of reactivity, and a thorough understanding of the environment and its restrictions will enable you to save time and concentrate on your business.</p>
                        <p>Elite Lima has vast expertise in the Peruvian market and our Lima relationships have enabled us to provide a complete portfolio of our models and hostesses. Our staff has been trained in several Peruvian locations for events and promotions, video clips etc. We'd like to present you to the Hostesses in Lima Peru, who will greet your guests and ensure that your event is a success. Don't hesitate to get in touch with us soon away.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                <!-- 1 -->


@stop
@section('scripts')
    <script type="text/javascript">
        $('body').on('click', '.read-more', function (e)
        {
            if ($(".read-more-text").hasClass('d-none'))
            {
                $(this).text("Read Less");
                $(".read-more-text").removeClass('d-none');
            }
            else
            {
                $(this).text("Read More");
                $(".read-more-text").addClass('d-none');
            }
        });
    </script>
@endsection

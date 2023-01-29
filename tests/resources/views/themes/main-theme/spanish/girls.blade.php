@extends('themes.main-theme.layouts.master-es')
<?php

?>
@section('title',$title)
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
                                                        value=''>Color de cabello</option>
                                                    @foreach($hairs as $hair)
                                                        <option value="{{$hair->id}}" class="span12 option">{{$hair->spanish}}</option>
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
                                                        value=''>Edad</option>
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
                                                        value=''>Estatura</option>
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
                                                <select name="breast" class="span12"><option value="">Medida de seno</option><option value="small" class="span12 option">Pequeña</option><option value="medium" class="span12 option">Medio</option><option value="big" class="span12 option">Grande</option><option value="xbig" class="span12 option">X grande</option> </select>
                                            </div>
                                        </div>
                                        <div
                                            id="" class="span1">
                                            <div
                                                class="input-append" style="margin-top: 0px;"> <input
                                                    type="hidden" name="submitproduct" id="getsearchdata" value="search" class="btn" /><input
                                                    name="button" type="submit" name=searchProduct class="btn" id="button" value="Buscar" /></div>
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
                    <ul
                        class="thumbnails list">
                        @foreach($girls as $girl)
                            <?php $image = $girl->first_image->image; ?>

                            <li
                                class="span2" style="text-align: center;" data-name="{{$girl->name}}" data-age="{{$girl->age}}" data-hair="{{$girl->eye_color}}" data-breast="{{$girl->breast}}" data-height="{{$girl->height}}">
                                <a
                                    href="{{url('girls/'.$girl->slug.'/es')}}" title="">
                                    <img
                                        src="{{asset("uploads/girls/$image")}}" alt="" />
                                    <h3><span>{{$girl->name}}</span></h3>
                                </a>
                            </li>
                        @endforeach


                    </ul>
                </div>
            </div>
        </div>
    </div>
                <!-- 1 -->


@stop
@section('scripts')
    <script type="text/javascript">

    </script>
@endsection

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
                        class="container">
                        <div
                            class="row">
                            <div
                                class="span6">
                                <h1>{{$girl->name}}</h1>
                                <div
                                    class="modelDetails details-prod">
                                    <table>
                                        <tr>
                                            <td> Color de cabello</td>
                                            <td>{{$girl->hair->spanish}}</td>
                                        </tr>
                                        <tr>
                                            <td> Edad</td>
                                            <td>{{$girl->age}}</td>
                                        </tr>
                                        <tr>
                                            <td>Estatura</td>
                                            <td>{{$girl->height}} cm</td>
                                        </tr>
                                        <tr>
                                            <td>Medida de seno</td>
                                            <?php $found = \App\Constant::where('name',$girl->breast)->first(); if ($found){$breast = $found->spanish;}else{$breast= $girl->breast;}?>
                                            <td>{{$breast}}</td>
                                        </tr>
                                        <tr>
                                            <td> Nacionalidad</td>
                                            <td>{{$girl->nationality}}</td>
                                        </tr>
                                        <tr>
                                            <td>Ciudad</td>
                                            <td>{{$girl->city->name}}</td>
                                        </tr>
                                        <tr>
                                            <td>Peso</td>
                                            <td>{{$girl->weight}}</td>
                                        </tr>
                                        <tr>
                                            <td> Ojos</td>
                                            <td>{{$girl->eye->spanish}}</td>
                                        </tr>
                                        <tr>
                                            <td> Teléfono</td>
                                            <td>{{$girl->phone}}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{{$girl->email}}</td>
                                        </tr>
                                        <tr>
                                            <td> Idiomas</td>
                                            <td>{{$girl->languages}}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div
                                    class="clearfix"></div>
                            </div>
                            <div
                                class="span6">
                                <div
                                    class="sidebar">
                                    <div
                                        class="widget">
                                        <div
                                            class="modelGallery">
                                            <div
                                                <?php $first =$girl->first_image->image; $sn = 0; ?>
                                                class="firtsPhoto"><a
                                                    class="popup" href="{{asset("uploads/girls/$first")}}"><img
                                                        src="{{asset("uploads/girls/$first")}}" class="img-rounded" title="FULL SCREEN" alt="Top Class girl" /></a></div>
                                            <div
                                                class="spacer5"></div>
                                            <div
                                                class="galleryPhotos">
                                                <table
                                                    cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                                                    <tr>
                                                        @foreach($girl->images as $image)
                                                            <?php $sn++; ?>

                                                            <td
                                                                align="center" valign="middle"><a
                                                                    class="" href="{{asset("uploads/girls/$image->image")}}"><img
                                                                        src="{{asset("uploads/girls/$image->image")}}" class="img-rounded" title="Model " alt="Model " /></a></td>
                                                            <td><span
                                                                    class="photoSpacer"></span></td>

                                                        @endforeach

                                                    </tr>
                                                </table>
                                                <table
                                                    id="elementlistline_3" style="width: 100%;" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td
                                                            style="width: 50%; text-align:justify">
                                                            <?php echo $girl->profile_es; ?>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop
@section('scripts')
    <script type="text/javascript">

    </script>
@endsection

@extends('themes.main-theme.layouts.master')
<?php

?>
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
                                            <td> Hair Color</td>
                                            <td>{{$girl->hair->english}}</td>
                                        </tr>
                                        <tr>
                                            <td> Age</td>
                                            <td>{{$girl->age}}</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td>{{$girl->height}}</td>
                                        </tr>
                                        <tr>
                                            <td>Size breast</td>
                                            <td>{{$girl->breast}}</td>
                                        </tr>
                                        <tr>
                                            <td> Nationality</td>
                                            <td>{{$girl->nationality}}</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>{{$girl->city->name}}</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>{{$girl->weight}}</td>
                                        </tr>
                                        <tr>
                                            <td> Eyes</td>
                                            <td>{{$girl->eye->english}}</td>
                                        </tr>
                                        <tr>
                                            <td> Phone</td>
                                            <td>{{$girl->phone}}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{{$girl->email}}</td>
                                        </tr>
                                        <tr>
                                            <td> Languages</td>
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
                                    <div class="widget">
                                        <div class="modelGallery">
                                         <?php 
                                              $sn = 0;
                                              $first = $girl->first_image->image;
                                          ?>
                                      <!-- Wrapper for slides -->
                                      @if(count($girl->images) > 0)
                                      <div id="myCarousel" class="carousel slide" data-interval="false">
                                      <div class="carousel-inner">
                                         @foreach($girl->images as $image)
                                        <div class="item @if($sn == 0) active @endif firtsPhoto" data-src="{{asset("uploads/girls/thumbs/".$image->image)}}">
                                          <a class="popup" href="{{asset("uploads/girls/".$image->image)}}">
                                          <img src="{{asset("uploads/girls/thumbs/".$image->image)}}" class="img-rounded" title="FULL SCREEN" alt="Top Class girl">
                                          </a>
                                        </div>
                                         <?php $sn++; ?>
                                         @endforeach
                                         </div>
                                          <!-- Left and right controls -->
                                          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                  <span class="fa fa-chevron-left angles"></span>
                                                  <span class="sr-only">Previous</span>
                                          </a>
                                          <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                               <span class="fa fa-chevron-right angles"></span>
                                               <span class="sr-only">Next</span>
                                          </a>
                                        </div>
                                         @else
                                          <div class="firtsPhoto">
                                          <a class="popup" href="{{asset("uploads/girls/thumbs/$first")}}">
                                          <img src="{{asset("uploads/girls/thumbs/$first")}}" class="img-rounded" title="FULL SCREEN" alt="Top Class girl">
                                          </a>
                                          </div>
                                         @endif
                                        <button style="margin-top: 15px;margin-bottom: 15px;" class="sharer btn btn-grey pull-right"
                                                    data-sharer="facebook"
                                                    data-url="{{url('girls/'.$girl->slug)}}">
                                                <i class="fa fa-facebook"></i>
                                                Share on Facebook
                                            </button>
                                            <div
                                                class="spacer5"></div>
                                            <div
                                                class="galleryPhotos">
                                                <table
                                                    cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                                                    <tr>
                                                        @foreach($girl->images as $image)
                                                            <?php 
                                                            // $sn++;
                                                            ?>

                                                            <td align="center" valign="middle">
                                                                <a class="" href="{{asset("uploads/girls/thumbs/$image->image")}}">
                                                                <img src="{{asset("uploads/girls/thumbs/$image->image")}}" class="img-rounded" title="{{$image->es}}" alt="Model " />
                                                                </a>
                                                                </td>
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
@section("stylesheets")
    <style type="text/css">
        .btn-grey{
            background-image: linear-gradient(to bottom, #747474, #e6e6e6);
            color: white;
            text-shadow: none;
        }
        .angles {
           font-size: 16px !important;
           vertical-align: middle;
        }
        .carousel-control{
            border: none;
            opacity: 1;
            cursor: pointer;
            top: 50%;
        }
    </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    @foreach($girl->images as $image)
        <meta property="og:image" content="{{asset("uploads/girls/$image->image")}}"/>
        <meta property="og:image:secure_url" content="{{asset("uploads/girls/$image->image")}}" />
        <link rel="image_src" href="{{asset("uploads/girls/$image->image")}}"/>
    @endforeach
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
@endsection
@section('scripts')
    <script src="{{asset("theme/js/sharer.min.js")}}"></script>
    {{--<script type="text/javascript">--}}
    {{--$(".img_girl").click(function () {--}}
    {{--var img = $(this).attr("href");--}}
    {{--$('meta[property="og:image"]').attr('content',img)--}}
    {{--$('meta[property="og:image:secure_url"]').attr('content',img)--}}
    {{--});--}}
    {{--</script>--}}
@endsection

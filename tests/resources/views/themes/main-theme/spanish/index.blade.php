<?php //dd("working"); ?>
@extends('themes.main-theme.layouts.home-es')
<?php
if(isset($settings['site_title'])) {
    $title = $settings['site_title'];
}else {
    $title = "no title";
}
?>
@section('title',$title)
@section("stylesheets")
    <style>header { display: none; }
        .footerMenu { display: none; }
        .copyright { display: block; }
    </style>
@endsection

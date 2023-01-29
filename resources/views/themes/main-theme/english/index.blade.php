<?php //dd("working"); ?>
@extends('themes.main-theme.layouts.home')
<?php
if(isset($settings['site_title'])) {
    $title = $settings['site_title'];
}else {
    $title = "no title";
}
?>
@section('meta_title', 'Elite Lima: Discover the Best Leading Modeling Agency in Peru')
@section('meta_keywords', 'Modelling Agency in Peru, Models Agency')
@section('meta_description', 'Elite Lima is a leading modelling agency in Peru. We manage models of all ages for advertising in newspapers, magazines, commercial, tv, events, fashion shows etc.')
@section("stylesheets")
    <style>header { display: none; }
        .footerMenu { display: none; }
        .copyright { display: block; }
    </style>
@endsection

<?php //dd("working"); ?>
@extends('themes.main-theme.layouts.home-es')
<?php
if(isset($settings['site_title'])) {
    $title = $settings['site_title'];
}else {
    $title = "no title";
}
?>
@section('meta_title', 'Elite Lima: Descubre la Mejor Agencia de Modelos Líder en Perú')
@section('meta_keywords', 'Agencia de Modelos en Perú, Agencia de Modelos')
@section('meta_description', 'Elite Lima es una agencia de modelos líder en Perú. Gestionamos modelos de todas las edades para publicidad en periódicos, revistas, comerciales, tv, eventos, desfiles de moda, etc.')
@section("stylesheets")
    <style>header { display: none; }
        .footerMenu { display: none; }
        .copyright { display: block; }
    </style>
@endsection

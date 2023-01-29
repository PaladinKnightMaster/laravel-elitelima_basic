@extends('themes.main-theme.layouts.master-es')
<?php

?>
@section('meta_title', 'Descubre la Mejor Agencia de Modelos en Lima Perú | Elite Lima')
@section('meta_keywords', 'Anfitrionas en Lima Perú, Agencia de Anfitrionas en Lima Perú, Modelos en Lima Perú, Agencia de modelos en Lima Perú')
@section('meta_description', 'Una de las principales agencias de Azafatas en Perú, Elite Lima gestiona sesiones de fotos, desfiles de moda, reservas de artistas para varios de sus clientes.')
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
                                    method="post" id="" action="{{route("search-models-es")}}">
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
                    <!-- <h2 style="margin-bottom: 30px;">Modelos para sesión de fotos en Lima Perú</h2> -->
                    <ul
                        class="thumbnails list">
                        @foreach($girls as $girl)
                            <?php 
                            
                                $image = isset($girl->first_image->image) ? $girl->first_image->image: '';
                                if(empty($image)){
                                continue;
                                }
                                $title = isset($girl->first_image->es) ? $girl->first_image->es:'';
                            ?>

                            <li
                                class="span2" style="text-align: center;" data-name="{{$girl->name}}" data-age="{{$girl->age}}" data-hair="{{$girl->eye_color}}" data-breast="{{$girl->breast}}" data-height="{{$girl->height}}">
                                <a
                                    href="{{url('girls/'.$girl->id.'/es')}}" title="{{$title}}">
                                    <img
                                        src="{{asset("uploads/girls/thumbs/$image")}}" alt="" />
                                    <h3><span>{{$girl->name}}</span></h3>
                                </a>
                            </li>
                        @endforeach


                    </ul>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span12">
                    <h1 style="margin-bottom: 15px;font-size: 18px;">Agencia de Modelos y Anfitrionas en Lima Perú</h1>
                    <a href="javascript:void(0);" class="read-more" style="font-size: 17px; text-decoration: revert;">Leer más</a>
                    <div class="read-more-text d-none" style="margin-top: 15px;">
                        <p>Elite Lima es una Agencia de Anfitrionas en Lima Perú, que ofrece un servicio personalizado de calidad que engrandece la imagen de las Modelos en Lima Perú para eventos corporativos, servicios de anfitrionas, desfiles de moda, revistas y periódicos. Sabemos identificar las necesidades de nuestros clientes y proporcionar la plataforma para facilitar y agilizar la toma de decisiones de proyectos. Estamos casi abiertos las 24 horas del día, los siete días de la semana.</p>
                        <p>Elite Lima tiene una cartera de Anfitrionas profesionales en Lima Perú, que poseen el talento y la belleza necesarios y tienen la fantástica personalidad, imagen, actitud y profesionalismo necesarios para prosperar en este competitivo negocio.</p>
                        <p>Somos la joya de la corona Agencia de Modelos en Lima, Perú. En Elite Lima te animamos a participar de nuestra propuesta de valor como un cliente especial con quien queremos compartir nuestro esfuerzo y éxito laboral ofreciendo nuestros servicios de Anfitrionas en Lima Perú.</p>
                        <p>Si buscas modelos reconocidas en Lima Perú, has venido a la plataforma virtual número uno. Te daremos todos los detalles que necesitas. Muchos modelos deslumbrantes representan varios estilos de modelaje y están esperando dar lo mejor de sus talentos profesionales.</p>
                        <p>Para Modelos y damas aspirantes: Si desea ser parte del personal de la agencia Elite Lima, envíe 4-5 fotos (rostro/cuerpo) por correo electrónico, agregue edad, altura o puede llamar por teléfono.</p>
                        <p>Lo responderemos en menos de 24 horas.</p>
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
                $(this).text("Leer Menos");
                $(".read-more-text").removeClass('d-none');
            }
            else
            {
                $(this).text("Leer más");
                $(".read-more-text").addClass('d-none');
            }
        });
    </script>
@endsection

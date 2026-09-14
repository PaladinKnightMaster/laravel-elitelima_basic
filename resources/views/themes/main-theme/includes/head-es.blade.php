<?php
if(isset($settings['theme_color'])) {
    $theme_color = $settings['theme_color'];
}else {
    $theme_color = "#c73c1c";
}
if(isset($settings['favicon'])) {
    $favicon = $settings['favicon'];
}else {
    $favicon = "img/favicon.ico";
}
?>
<head>
    <meta charset="utf-8" />

    <meta
        id="MetaRating" name="Rating" content="mature" />
    <meta
        name="Robots" content="index,follow" />
    <meta
        name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="http://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
    <link
        href="http://fonts.googleapis.com/css?family=Rochester" rel="stylesheet" type="text/css" />
    
		
	<?php 
	$uri = request()->getRequestUri();
	if($uri == '/models-hostess/es'){
		?>
		<meta name="description" content="Una de las principales agencias de Anfitrionas en Perú, Elite Lima gestiona sesiones de fotos, desfiles de moda, reservas de artistas para varios de sus clientes" />
		<?php
	}
	else {
		?>
		<meta name="description" content="@yield('meta_description')" />
		<?php
	}		
	?>    
    <meta name="keywords" content="@yield('meta_keywords')" />
    <meta
        http-equiv="content-language" content="es" />
    <meta
        name="language" content="es" />
    <title>@yield('meta_title')</title>
    
    <link
        rel="icon" href="<?php if (isset($settings['favicon'])){ echo $settings['favicon']; } ?>" type="image/x-icon" />
    <link
        rel="shortcut icon" href="<?php if (isset($settings['favicon'])){ echo $settings['favicon']; } ?>" type="image/x-icon" />
    <link
        type="text/css" href="http://fonts.googleapis.com/css?family=Buenard:400,700" rel="stylesheet" media="All" />
    <link href="{{asset("theme/elite/css/mainie.css")}}" rel="stylesheet" type="text/css" />
    <link href="{{asset("theme/elite/css/font-awesome-ie7.css")}}" rel="stylesheet" type="text/css" />

    <script src="{{asset("theme/elite/js/dependencies/html5shim.js")}}"></script>

<link rel="canonical" href="https://www.elitelima.com/es"/>

    <script type="text/javascript">var baseURL = 'http://elitelima.com/';
        var RecaptchaOptions = {

            theme : 'white'

        };
    </script>
    @yield('stylesheets')
</head>

    <!--=============== favicons ===============-->



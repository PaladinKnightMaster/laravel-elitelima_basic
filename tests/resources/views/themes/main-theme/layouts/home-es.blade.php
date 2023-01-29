<!DOCTYPE html>
<html>
@include('themes.main-theme.includes.head-es')


<body>
@include('themes.main-theme.includes.nav-es')
@include('themes.main-theme.includes.header-es')

<div
    class="homeSpacer"></div>
<div
    class="container">
    <div
        class="row">
        <div
        <?php
        if(isset($settings['logo_es'])) {
            $logo_es = $settings['logo_es'];
        }else {
            $logo_es = "logo.png";
        }?>
            class="span12">
            <a href="{{route("home")}}" id="HomePageUrl1_HomePageUrl">
                @if(File::exists('uploads/'.$logo_es))
                    <img id="PrenavContentPlaceHolder_Image1" src="{{asset("uploads/$logo_es")}}" alt="elitelima logo" />
                @else
                    <img src="images/logo.png" alt="">
                @endif

            </a>

        </div>
    </div>
</div>
<div
    class="content">
    <div
        class="container-fluid">
        <div
            class="row-fluid">
            <div
                class="span12"></div>
        </div>
    </div>
</div>
@include('themes.main-theme.includes.footer-es')
@include('themes.main-theme.includes.scripts')

</body>
</html>


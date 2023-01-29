<!DOCTYPE html>
<html>
@include('themes.main-theme.includes.head')


<body>
@include('themes.main-theme.includes.nav')
@include('themes.main-theme.includes.header')

<div
    class="homeSpacer"></div>
<div
    class="container">
    <div
        class="row">
        <div
        <?php
        if(isset($settings['logo'])) {
            $logo = $settings['logo'];
        }else {
            $logo = "logo.png";
        }?>
            class="span12">
            <a href="{{route("home")}}" id="HomePageUrl1_HomePageUrl">
                @if(File::exists('uploads/'.$logo))
                    <img id="PrenavContentPlaceHolder_Image1" src="{{asset("uploads/$logo")}}" alt="elitelima logo" />
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
@include('themes.main-theme.includes.footer')
@include('themes.main-theme.includes.scripts')

</body>
</html>


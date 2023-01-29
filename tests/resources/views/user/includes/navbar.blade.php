<?php $settings = \App\Setting::pluck('value', 'name')->all();
if(isset($settings['logo'])) {
$logo = $settings['logo'];
}else {
$logo = "placeholder.jpg";
}
?>
<nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header">
        <div class="top-left-part">
            <!-- Logo -->
            <a class="logo" href="{{route("user-dashboard")}}">
                <!-- Logo icon image, you can use font-icon also --><b>
                    {{--<!--This is dark logo icon--><img src="{{asset('admin//plugins/images/admin-logo.png')}}" alt="home" class="dark-logo" /><!--This is light logo icon--><img src="{{asset('admin/plugins/images/admin-logo-dark.png')}}" alt="home" class="light-logo" />--}}
                </b>
                <!-- Logo text image you can use text also --><span class="hidden-xs">
                        <!--This is dark logo text--><img src="{{asset("uploads/$logo")}}" style="-webkit-filter: brightness(0) invert(1);  filter: brightness(0) invert(1);"  width="80%" alt="home" class="dark-logo" /><!--This is light logo text--><img src="{{asset("uploads/$logo")}}" width="80%" style="-webkit-filter: brightness(0) invert(1);  filter: brightness(0) invert(1);" alt="home" class="light-logo" />
                     </span> </a>
        </div>
        <!-- /Logo -->
        <!-- Search input and Toggle icon -->
        <ul class="nav navbar-top-links navbar-left">
            <li><a href="javascript:void(0)" class="open-close waves-effect waves-light visible-xs"><i class="ti-close ti-menu"></i></a></li>

            <!-- /.Megamenu -->
        </ul>
        <ul class="nav navbar-top-links navbar-right pull-right">
            
            <li class="dropdown">
                <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="{{asset('admin/plugins/images/users/user.png')}}" alt="user-img" width="36" class="img-circle"><b class="hidden-xs"><?php $user = Auth::user();echo $user->name;?></b><span class="caret"></span> </a>
                <ul class="dropdown-menu dropdown-user animated flipInY">
                    <li>
                        <div class="dw-user-box">
                            <div class="u-img"><img src="{{asset('admin/plugins/images/users/user.png')}}" alt="user" /></div>
                            <div class="u-text">
                                <h4>{{$user->name}}</h4>
                                <p class="text-muted">{{$user->email}}</p><a href="{{route("user-edit")}}" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                        </div>
                    </li>

                    <li role="separator" class="divider"></li>
                    <li><a href="{{route('logout')}}" title="logout" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();"><i class="fa fa-power-off"></i> Logout</a></li>
                    <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
    </div>
    <!-- /.navbar-header -->
    <!-- /.navbar-top-links -->
    <!-- /.navbar-static-side -->
</nav>

<nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header">
        <div class="top-left-part">
            <!-- Logo -->
            <a class="logo" href="{{route('admin.dashboard')}}">
                <!-- Logo icon image, you can use font-icon also --><b>
                    {{--<!--This is dark logo icon--><img src="{{asset('admin//plugins/images/admin-logo.png')}}" alt="home" class="dark-logo" /><!--This is light logo icon--><img src="{{asset('admin/plugins/images/admin-logo-dark.png')}}" alt="home" class="light-logo" />--}}
                </b>
                <?php $settings = \App\Setting::pluck('value','name')->toArray(); $logo = $settings['logo']; ?>

                <!-- Logo text image you can use text also --><span class="hidden-xs">
                        <!--This is dark logo text--><img src="{{asset("uploads/$logo")}}" width="80%" alt="home" class="dark-logo" /><!--This is light logo text--><img src="{{asset("uploads/$logo")}}" width="80%" alt="home" class="light-logo" />
                     </span> </a>
        </div>
        <ul class="nav navbar-top-links navbar-left">
            <li><a href="javascript:void(0)" class="open-close waves-effect waves-light"><i class="ti-menu"></i></a></li>

        </ul>
        <ul class="nav navbar-top-links navbar-right pull-right">
            {{--<li>--}}
                {{--<form role="search" class="app-search hidden-sm hidden-xs m-r-10">--}}
                    {{--<input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a> </form>--}}
            {{--</li>--}}
            <li class="dropdown">
                <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="{{asset('admin/plugins/images/users/user.png')}}" alt="user-img" width="36" class="img-circle"><b class="hidden-xs"><?php $user = Auth::user();echo $user->name;?></b><span class="caret"></span> </a>
                <ul class="dropdown-menu dropdown-user animated flipInY">
                    <li>
                        <div class="dw-user-box">
                            <div class="u-img"><img src="{{asset('admin/plugins/images/users/user.png')}}" alt="user" /></div>
                            <div class="u-text">
                                <h4>{{$user->name}}</h4>
                                <p class="text-muted">{{$user->email}}</p><a href="{{route('admin-profile',Auth::user()->id)}}" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                        </div>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a href="{{route('home')}}" target="_blank"><i class="fa fa-eye"></i> Visit Site</a></li>
                    {{--<li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>--}}
                    {{--<li><a href="#"><i class="ti-email"></i> Inbox</a></li>--}}
                    {{--<li role="separator" class="divider"></li>--}}
                    {{--<li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>--}}
                    <li role="separator" class="divider"></li>
                    <li><a href="{{url('admin/logout')}}"><i class="fa fa-power-off"></i> Logout</a></li>
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

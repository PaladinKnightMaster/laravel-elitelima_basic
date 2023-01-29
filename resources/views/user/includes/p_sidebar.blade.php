<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <div class="profile-sidebar">
        <div class="profile-userpic">
            <img src="{{asset('admin/assets/avatars/user.jpg')}}" class="img-responsive" alt="">
        </div>
        <div class="profile-usertitle">
            <div class="profile-usertitle-name"><?php $user = Auth::user();echo $user->name;?></div>
            <div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
        </div>
        <div class="clear"></div>
    </div>
    <div class="divider"></div>
    {{--<form role="search">--}}
    {{--<div class="form-group">--}}
    {{--<input type="text" class="form-control" placeholder="Search">--}}
    {{--</div>--}}
    {{--</form>--}}
    <ul class="nav menu">
        <li class="active" id="main_field"><a href="{{route('user-dashboard')}}"><em class="fa fa-navicon">&nbsp;</em> Projects</a></li>


        <li>
            <a href="{{route('logout')}}" title="logout" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();"  class="icon admin" ><em class="fa fa-power-off">&nbsp;</em> Logout</a>
            <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </li>

    </ul>
</div><!--/.sidebar-->

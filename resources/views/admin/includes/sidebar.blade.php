<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav slimscrollsidebar">
        <div class="sidebar-head">
            <h3><span class="fa-fw open-close"><i class="ti-close ti-menu"></i></span> <span class="hide-menu">Navigation</span></h3>
        </div>
        <ul class="nav" id="side-menu">
            <li> <a href="{{route('admin.dashboard')}}" class="waves-effect"><i class="fa fa-dashboard fa-fw"></i><span class="hide-menu"> Dashboard </span></a> </li>
            {{--<li> <a href="{{route('users.index')}}" class="waves-effect"><i class="fa fa-users fa-fw"></i><span class="hide-menu"> Manage Users </span></a> </li>--}}
            <li> <a href="#" class="waves-effect"><i class="fa fa-building fa-fw"></i> <span class="hide-menu">Countries & Cities<span class="fa arrow"></span>  </span></a>
                <ul class="nav nav-second-level">
                    <li> <a href="{{route('countries.index')}}" class="waves-effect"><i class="fa  fa-navicon fa-fw"></i><span class="hide-menu"> Countries </span></a> </li>
                    <li> <a href="{{route('cities.index')}}" class="waves-effect"><i class="fa  fa-building-o fa-fw"></i><span class="hide-menu"> Cities </span></a> </li>
                </ul>
            </li>
            <li> <a href="{{route('hairs.index')}}" class="waves-effect"><i class="fa fa-flash fa-fw"></i><span class="hide-menu"> Hairs</span></a> </li>
            <li> <a href="{{route('eyes.index')}}" class="waves-effect"><i class="fa fa-eye fa-fw"></i><span class="hide-menu"> Eyes</span></a> </li>
            <li> <a href="{{route('girls.index')}}" class="waves-effect"><i class="fa fa-female fa-fw"></i><span class="hide-menu"> Girls</span></a> </li>
            <li> <a href="{{route('agency.index')}}" class="waves-effect"><i class="fa fa-info fa-fw"></i><span class="hide-menu"> Agency</span></a> </li>
            <li> <a href="{{route('pages.index')}}" class="waves-effect"><i class="fa fa-file-text-o fa-fw"></i><span class="hide-menu"> Pages</span></a> </li>
            <li> <a href="{{route('videos.index')}}" class="waves-effect"><i class="fa fa-video-camera fa-fw"></i><span class="hide-menu"> Videos</span></a> </li>
            <li> <a href="{{route('constants.index')}}" class="waves-effect"><i class="fa fa-bullhorn fa-fw"></i><span class="hide-menu"> Language constants</span></a> </li>
            <li> <a href="{{route('settings.index')}}" class="waves-effect"><i class="ti-settings fa-fw"></i><span class="hide-menu"> Settings</span></a> </li>
        </ul>
    </div>
</div>


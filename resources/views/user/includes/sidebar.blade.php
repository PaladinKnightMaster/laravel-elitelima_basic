<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav slimscrollsidebar">
        <div class="sidebar-head">
            <h3><span class="fa-fw open-close"><i class="ti-menu hidden-xs"></i><i class="ti-close visible-xs"></i></span> <span class="hide-menu">Navigation</span></h3>
        </div>
        <ul class="nav" id="side-menu">
            <li class="devider"></li>

            <li> <a href="{{route('home')}}" class="waves-effect"><i class="fa fa-plus-square fa-fw"></i><span class="hide-menu"> Add new Order</span></a> </li>
            <li> <a href="{{route('user-dashboard')}}" class="waves-effect"><i class="fa fa-list-alt fa-fw"></i><span class="hide-menu"> Current Orders</span></a> </li>
            <li> <a href="{{route('get-cancel-orders')}}" class="waves-effect"><i class="fa fa-trash fa-fw"></i><span class="hide-menu"> Cancelled Orders</span></a> </li>

            <li class="devider"></li>


            <li><a href="{{route('logout')}}" title="logout" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();" class="waves-effect"><i class="fa fa-sign-out fa-fw"></i> <span class="hide-menu">Log out</span></a></li>
        </ul>
    </div>
</div>

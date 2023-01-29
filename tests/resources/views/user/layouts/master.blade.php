<!DOCTYPE html>
<html lang="en">
@include('user.includes.head')


<body class="fix-header">
<!-- ============================================================== -->
<!-- Preloader -->
<!-- ============================================================== -->
@include('user.includes.pre_loader')
<!-- ============================================================== -->
<!-- Wrapper -->
<!-- ============================================================== -->
<div id="wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    @include('user.includes.navbar')
    <!-- End Top Navigation -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    @include('user.includes.sidebar')
    <!-- ============================================================== -->
    <!-- End Left Sidebar -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Page Content -->
    <!-- ============================================================== -->
    <div id="page-wrapper">

        @yield('content')
        <!-- /.container-fluid -->
        @include('user.includes.footer')
    </div>
    <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
<!-- jQuery -->
@include('user.includes.footer-scripts')
@yield('scripts')
</body>

</html>


{{--@if(Session::has('success_message'))--}}
    {{--<div class="alert alert-success">--}}
        {{--{{ Session::get('success_message') }}--}}
    {{--</div>--}}
{{--@endif--}}
{{--@if(Session::has('error_message'))--}}
    {{--<div class="alert alert-danger">--}}
        {{--{{ Session::get('error_message') }}--}}
    {{--</div>--}}
{{--@endif--}}


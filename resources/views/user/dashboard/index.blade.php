@extends('user.layouts.master')
@section('content')
    <div class="container-fluid">
        <div class="row bg-title">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 class="page-title">Current Order</h4>
            </div>
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="{{route('user-dashboard')}}">Dashboard</a></li>
                    <li class="active">Current Order</li>
                </ol>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- ============================================================== -->
        <!-- Other sales widgets -->
        <!-- ============================================================== -->
        <!-- .row -->

        <!-- ============================================================== -->
        <!-- Demo table -->
        <!-- ============================================================== -->

        <div class="row">
            <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading">Search Orders</div>
                    <div class="table-responsive">
                        <form action="{{route('get-search-orders')}}" method="post">
                            @csrf
                            <div class="col-sm-10 form-group">
                                <input type="text" name="keyword" class="form-control" placeholder="Order Number Or Service Or Keywords" required>
                            </div>
                            <div class="col-sm-2">
                                <button type="submit" class="btn btn-info"><i class="fa fa-search"></i></button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading">CURRENT ORDERS</div>
                    <div class="table-responsive">
                        <table class="table table-hover manage-u-table">
                            <thead>
                            <tr>
                                <th class="text-center" style="width: 70px">#</th>
                                <th>ORDER NO</th>
                                <th>SERVICE</th>
                                <th>ORDERED</th>
                                <th>DUE</th>
                                <th style="width: 250px">STATUS</th>
                                <th style="width: 300px">ACTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if(count($orders)>0)
                                <?php $sn = 0; ?>
                                @foreach($orders as $order)
                                    <?php $sn++; ?>
                                    <tr>
                                        <td class="text-center">{{$sn}}</td>
                                        <td><span class="font-medium">{{$order->order_no}}</span></td>
                                        <td>{{$order->service_title}}</td>
                                        <td>{{$order->created_at->format('d/M/Y')}}</td>
                                        <td>{{$order->total}}
                                        <td>
                                            @if($order->status==0)
                                                <a href="{{route('show-order',$order->id)}}" class="btn btn-warning">Awaiting Payment</a>
                                            @elseif($order->status ==1)
                                                <input type="button" class="btn btn-success" value="Paid">
                                            @elseif($order->status ==4)
                                                <input type="button" class="btn btn-info" value="Completed">
                                            @endif

                                        </td>
                                        <td>
                                            <a href="{{route('show-order',$order->id)}}" class="btn btn-info btn-outline btn-circle btn-lg m-r-5" title="Show Order"><i class="ti-search"></i></a>
                                            @if($order->status == 0)
                                                <a href="{{route('cancel-order',$order->id)}}" class="btn btn-info btn-outline btn-circle btn-lg m-r-5" title="Cancel Order"><i class="icon-trash"></i></a>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td colspan="7">
                                        <div class="alert alert-danger">Sorry No Orders Found</div>
                                    </td>
                                </tr>
                            @endif

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- Right sidebar -->
        <!-- ============================================================== -->
        <!-- .right-sidebar -->
        <!-- ============================================================== -->
        <!-- End Right sidebar -->
        <!-- ============================================================== -->
    </div>
@endsection
@section('styles')
    <style type="text/css">
        #side-menu > li > a.active {
            background: #ffffff;
            color: #54667a;
            font-weight: 500;
        }
    </style>
@endsection
@section('scripts')
    <script type="text/javascript">
        $( document ).ready(function() {
            $(".nav").find("a").each(function () {
                $(this).removeClass("active");
            });
        });

    </script>
@endsection

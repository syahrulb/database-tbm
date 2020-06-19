<template>
    <nav class="navbar p-l-5 p-r-5">
        <ul class="nav navbar-nav navbar-left">
            <li>
                <div class="navbar-header">
                    <a href="#" class="h-bars"></a>
                    <a class="navbar-brand" href="#"><img src="../../assets/images/TBM-VERTEX-300x300.png" width="30" alt="Oreo"><span class="m-l-10">Database TBM</span></a>
                </div>
            </li>
            <li class="">|</li>
            <li class="$"><a href="#"><i class="zmdi zmdi-home"></i> Home </a> </li>
            <li class="dropdown ">
            <a href="#" class="dropdown-toggle" 
            data-toggle="dropdown" role="button" aria-expanded="false"><i class="zmdi zmdi-assignment-o"></i> <span>Master</span> </a>
            <ul class="dropdown-menu pullDown">
                <li class="body">
                    <div class="slimScrollDiv" >
                        <ul class="menu list-unstyled" >
                        <li>
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            User
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="">
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Sistem
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Rule
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Tahun
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Group Sistem
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </li>
            </ul>
            </li>
            <li class="dropdown ">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="zmdi zmdi-flattr"></i> <span>Transaksi</span> </a>
            <ul class="dropdown-menu pullDown">
                <li class="body">
                    <div class="slimScrollDiv" >
                        <ul class="menu list-unstyled" >
                        <li>
                            <a href="">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Sirkulasi Sistem
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="media">
                                    <div class="media-body">
                                        <span class="message ">
                                            Sirkulasi Rule
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </li>
            </ul>
            </li>
            <li class="float-right">
                <a href="#" id="btn_keluar" class="js-right-sidebar">
                    <i class="zmdi zmdi-close-circle"></i>
                </a>
            </li>
            <li class="float-right"><a href="#"><i class="zmdi zmdi-lock"></i> login </a> </li>
        </ul>
    </nav>
</template>
<script>
    export default {
    }
</script>
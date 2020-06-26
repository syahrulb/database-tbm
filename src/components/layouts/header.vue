<template>
    <nav class="navbar p-l-5 p-r-5">
        <ul class="nav navbar-nav navbar-left">
            <li>
                <div class="navbar-header">
                    <router-link to="/" tag="a" class="h-bars"></router-link>
                    <a href="#" class="h-bars"></a>
                    <router-link to="/" tag="a" class="navbar-brand">
                        <img src="@/assets/images/logo.png" width="30" alt="Oreo">
                        <span class="m-l-10">Database TBM</span>
                    </router-link>
                </div>
            </li>
            <li class="">|</li>
            <router-link to="/" tag="li" >
                <a href="#">
                    <i class="zmdi zmdi-home"></i> 
                    Home 
                </a>
            </router-link>
            <router-link v-if="isAuthenticated" to="/tambah-database" tag="li" >
                <a href="#">
                    <i class="zmdi zmdi-file-text"></i> 
                    Tambah Database 
                </a>
            </router-link>
            <li v-if="isAuthenticated" class="dropdown"  :class="{'show': headerDatabase}">
            <a href="#" @click.prevent="headerDatabase = !headerDatabase" class="dropdown-toggle" 
            data-toggle="dropdown" role="button" aria-expanded="false"><i class="zmdi zmdi-assignment-o"></i> <span>Database</span> </a>
            <ul class="dropdown-menu pullDown">
                <li class="body">
                    <div class="slimScrollDiv" >
                        <ul class="menu list-unstyled" >
                            <router-link v-for="(item, index) in getListDatabase" :key="index" tag="li" :to="{path:'/table/'+item.value}">
                                <a href="#">
                                    <div class="media">
                                        <div class="media-body">
                                            <span class="message">
                                                {{item.text}}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </router-link>
                        </ul>
                    </div>
                </li>
            </ul>
            </li>
            <li v-if="isAuthenticated" class="float-right">
                <a href="#" @click.prevent="keluar()" id="btn_keluar" class="js-right-sidebar">
                    <i class="zmdi zmdi-close-circle"></i>
                </a>
            </li>
            <router-link v-if="!isAuthenticated" to="/signin" tag="li" class="float-right">
                <a href="#">
                    <i class="zmdi zmdi-lock"></i> 
                    login 
                </a> 
            </router-link>
        </ul>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        data(){
            return{
                headerDatabase : false
            }
        },
        computed :{
            ...mapGetters(['isAuthenticated','getListDatabase'])
        },
        methods : {
            ...mapActions(['logout']),
            keluar(){
                this.$swal({
                    title: 'Apakah Anda Yakin?',
                    icon: 'question',
                    text: 'Anda akan keluar dari sistem.',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tidak',
                    showCloseButton: true,
                    showLoaderOnConfirm: true,
                }).then((result) => {
                    if(!result.isConfirmed){
                        this.$swal('Gagal', 'Anda belum keluar dari sistem', 'error');
                    }
                    else{
                        this.$swal('Sukses', 'Terimakasih telah menggunakan sistem database tbm', 'success');
                        this.logout()
                        this.$router.push('/signin')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .menu-active{
      text-decoration: underline !important;
    }
    .menu-active a {
        text-decoration: underline !important;
    }
</style>
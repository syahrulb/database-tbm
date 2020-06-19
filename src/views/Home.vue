<template>
  <div>
    <app-template 
    title_utama="Home" 
    title_kecil="Halaman ini merupakan halaman utama sistem"
    :breadscrumb="this.breadscrump" >
       <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card product-report">
                  <div class="header">
                    <h2><strong>Halaman Utama</strong> </h2>
                    <ul class="header-dropdown">
                      <li>
                        <!-- <a href="#" class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> Tambah data</a> -->
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row clearfix">

                    </div>
                  </div>
              </div>
          </div>
        </div>
    </app-template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import template from '@/components/layouts/template'
export default {
  name: 'Home',
  data(){
    return {
      breadscrump :[
        {url : '', judul : 'home'}
      ]
    }
  },
  components: {
    appTemplate : template
  }
}
</script>

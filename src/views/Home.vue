<template>
  <div>
    <app-template 
    title_utama="Home" 
    :breadscrumb="this.breadscrump">
       <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card product-report">
                  <div class="header">
                    <h2><strong>Selamat datang,</strong> </h2>
                    <ul class="header-dropdown">
                      <li>
                        <!-- <a href="#" class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> Tambah data</a> -->
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row">
                      <div class="col-md-12">
                        <blockquote>
                            <p class="blockquote blockquote-primary">
                                "Sistem ini berisikan infomasi mengenai : 
                                <br> resto, catering, penginapan, persewaan alat, persewaan kendaraan, percetakan, dan toko alat medis"
                                <br> 
                                <br>
                                <small>
                                    - Tim Bantuan Medis UNJ, 2020
                                </small>
                            </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </app-template>
  </div>
</template>

<script>
import template from '@/components/template/admin'
export default {
  name: 'Home',
  data(){
    return {
      breadscrump :[
        {url : '/', judul : 'home', class : 'breadcrumb-item', icon : 'zmdi zmdi-home'}
      ]
    }
  },
  components: {
    appTemplate : template
  }
}
</script>

<template>
  <div>
    <app-template >
       <div class="row clearfix">
          <div class="offset-md-3 col-md-6 offset-md-3">
              <div class="card product-report">
                  <div class="header">
                    <h2><strong>Selamat datang, silahkan Login</strong> </h2>
                    <ul class="header-dropdown">
                      <li>
                        <!-- <a href="#" class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> Tambah data</a> -->
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row clearfix">
                        <div class="col-md-12">
                            <img src="@/assets/images/logo.png" width="30%" alt="Rounded Image" class="rounded mx-auto d-block">
                        </div>
                        <div class="col-md-12">
                            <form method="POST" action="login" 
                                  accept-charset="UTF-8" class="form-horizontal" 
                                  enctype="multipart/form-data">
                                <div class="form-group">                                    
                                    <input type="text" class="form-control" placeholder="Username">
                                </div>
                                <div class="form-group">                                    
                                    <input type="password" class="form-control" placeholder="Password" autocomplete="false">
                                </div>
                                <button class="btn btn-primary float-right">Masuk</button>
                            </form>
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
import template from '@/components/template/auth'
export default {
  name: 'Sign-In',
  components: {
    appTemplate : template
  }
}
</script>

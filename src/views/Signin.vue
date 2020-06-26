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
                          <div v-if="error" class="alert alert-danger">
                            <ul>
                              <li v-for="(item, index) in error" :key="index">{{item.message}}</li>
                            </ul>
                          </div>
                            <form action="#" @submit.prevent="submit">
                                <div class="form-group">                                    
                                    <input type="text" v-model="form.email" class="form-control" placeholder="Username" autofocus>
                                </div>
                                <div class="form-group">                                    
                                    <input type="password" v-model="form.password" class="form-control" placeholder="Password" autocomplete="false">
                                </div>
                                <button type="submit" class="btn btn-primary float-right">Masuk</button>
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
// import firebase from "firebase";
export default {
  name: 'Sign-In',
  components: {
    appTemplate : template
  },
  methods: {
    submit() {
      this.$store.dispatch('login',this.form).then(response => {
          console.log(response);
          this.$swal('Berhasil', 'Berhasil Login', 'success');
          this.$router.push('/tambah-database');
      }, error => {
          this.error = error.response.data.error.errors;
          this.$swal('Gagal', 'Email dan password tidak cocok , koreksi kembali inputan anda', 'error');
      });
      }
  },
  data(){
    return {
      form : {
        email : null,
        password : null
      },
      error: null,
    }
  },
}
</script>

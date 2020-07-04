<template>
  <div>
    <app-template 
    title_utama="Input Database" 
    :breadscrumb="this.breadscrump">
       <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card product-report">
                  <div class="header">
                    <h2><strong>Form Tambah Database</strong> </h2>
                    <ul class="header-dropdown">
                      <li>
                        <a href="#" @click="tampilmodal()"  class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> tambah data </a>
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row">
                      <div class="offset-md-1 col-md-10 offset-md-1">
                        <h6>Pilih kategori Database</h6>
                        <div class="form-group">
                          <select name="select" class="form-control"  @change="ubahKategory($event)">
                            <option v-for="(item, index) in options" :key="index" :value="item.value" :selected="item.value == kategory">{{item.text}} </option>
                          </select>
                        </div>
                        <h6>Data umum</h6>
                        <hr>
                        <div v-for="(item, index) in field_umum" :key="index" class="form-group">
                            <label 
                            :for="item.name"
                            :key="`label-${item.name}`"
                            >{{item.label}} :</label>
                            
                            <input v-if="item.type !== 'textarea'" 
                            :type="item.type" :name="item.name" 
                            :placeholder="item.label" 
                            v-model="data_umum[item.name]" :min="item.min" :max="item.max"
                            :key="`field-${item.label}`" class="form-control" required autocomplete="off" />

                            <textarea v-if="item.type === 'textarea'" 
                            :name="item.name" 
                            :placeholder="item.label" 
                            :id="item.name" 
                            v-model="data_umum[item.name]"
                            :key="`field-textarea-${item.label}`" class="form-control" required>
                            </textarea>
                        </div>
                        <h6>Data Tambahan</h6>
                        <hr>
                        <div class="table-responsive">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <td v-for="(item, index) in field_data" :key="index">{{item.label}} </td>
                                <td>Aksi</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(value1, index) in data_tambahan" :key="index" >
                                <td v-for="(value2, index) in field_data" :key="index" >
                                  {{value1[value2.name]}}
                                </td>
                                <td > <button class="btn btn-danger" @click="onDelete(index)">x</button> </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <hr>
                        <button type="button" class="btn btn-md btn-primary float-right" @click="btnSimpan()">Simpan</button>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      <app-modal :fields="field_data" :judul="'resto'" @tambahanData="tambahanData" >
      </app-modal>

    </app-template>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";
import template from '@/components/template/admin'
import modal from '@/components/modal/modallData'
export default {
  name: 'Home',
  data(){
    return {
      breadscrump :[
        {url : '/tambah-database', judul : 'Tambah Data', class : 'breadcrumb-item', icon : 'zmdi zmdi-file-text'}
      ],
      data_umum : {},
      data_tambahan : [],
    }
  },
  components: {
    appTemplate : template,
    appModal : modal,
  },
  computed :{
      ...mapGetters('database',[
          'field_umum','field_data', 'database', 'kategory'
      ]),
      options(){
        return this.$store.getters.getListDatabase
      },
  },
  methods:{
      ...mapActions('database', [
          'initDatabase', 'changeDatabase','SimpanToFirebase'
      ]),
      tampilmodal(){
        this.$modal.show('modalformData');
      },
      ubahKategory(event){
        this.changeDatabase(event.target.value);
        this.data_umum = {};
        this.data_tambahan =[];
        this.$swal('Sukses', 'Form telah diubah', 'success');
      },
      tambahanData(data){
        this.data_tambahan.push(data)
      },
      btnSimpan(){
        let data_umum = this.data_umum;
        let data_tambahan = this.data_tambahan
        let database = {};
        for (const [key, value] of Object.entries(data_umum)) {
          database[key] = value;
        }
        database['data_tambahan'] =data_tambahan;
        this.$swal({
            title: 'Apakah Anda Yakin?',
            icon: 'question',
            text: 'Data data Akan disimpan.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
            showCloseButton: true,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => this.$swal.isLoading(),
            preConfirm: () => {
             return this.SimpanToFirebase(database).then(response => {
                        return response;
                      }, error => {
                          return error;
                      })
            },
        }).then((result) => {
          if(!result.isConfirmed){
            this.$swal('Gagal', 'Data belum disimpan di database', 'error');
          }
          else{
            if (typeof result.value.response !== 'undefined') {
                this.$swal('Gagal', result.value.response.data.results.message , 'error');
            }
            else{
              this.$swal('Sukses', result.value.data.results.message, 'success');
              this.onReset();
            }
          }
        })
      },
      onReset(){
        this.data_umum = {};
        this.data_tambahan = [];
      },
      onDelete(id){
        this.$swal({
            title: 'Apakah Anda Yakin?',
            icon: 'question',
            text: 'Data tambahan akan dihapus dari table .',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
            showCloseButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
          if(!result.isConfirmed){
            this.$swal('Gagal', 'Data tambahan belum dihapus', 'error');
          }
          else{
            this.data_tambahan.splice(this.data_tambahan.indexOf(id), 1)
            this.$swal('Sukses', 'Data Berhasil dihapus', 'success');
          }
        })
      }
  },
  created(){
      if(this.database== null){
        this.initDatabase()
      }
      else{
          return
      }
  }
}
</script>
<style  scoped>
</style>

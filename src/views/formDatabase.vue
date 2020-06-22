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
                        <a href="#" @click="tampilmodal()" class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> tambah data </a>
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row">
                      <div class="offset-md-1 col-md-10 offset-md-1">
                        <h6>Pilih kategori Database</h6>
                        <div class="form-group">
                          <select name="select" class="form-control" @change="ubahKategory($event)">
                            <option v-for="(item, index) in options" :key="index" :value="item.value" >{{item.text}} </option>
                          </select>
                        </div>
                        <h6>data umum</h6>
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
                            :key="`field-${item.label}`" class="form-control" required autocomplete="false" />

                            <textarea v-if="item.type === 'textarea'" 
                            :name="item.name" 
                            :placeholder="item.label" 
                            :id="item.name" 
                            v-model="data_umum[item.name]"
                            :key="`field-textarea-${item.label}`" class="form-control" required autocomplete="false">
                            </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      <app-modal :fields="field_data" :judul="'resto'" >
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
      test : null
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
        return this.$store.getters.getListDatabae
      },
  },
  methods:{
      ...mapActions('database', [
          'initDatabase'
      ]),
      tampilmodal(){
        this.$modal.show('modalformData');
      },
      ubahKategory(event){
        console.log(event.target.value);
        
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

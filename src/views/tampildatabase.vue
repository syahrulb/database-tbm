<template>
  <div>
    <app-template 
    :title_utama="'List '+judul" 
    :breadscrumb="this.breadscrump">
       <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card product-report">
                  <div class="header">
                    <h2><strong></strong> </h2>
                    <ul class="header-dropdown">
                      <li>
                        <router-link tag="a" to="/tambah-database"  class="btn btn-lg bg-purple"><i class="zmdi zmdi-file-plus text-white"></i> Tambah Data</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row">
                      <div class=" col-md-12 ">
                        
                        <div class="table-responsive">
                          <!-- <datatable :columns="field_umum" :data="data"  class="table table-bordered">
                          </datatable>
                          <datatable-pager v-model="page"></datatable-pager> -->
                            <v-data-table
                              :headers="field_umum"
                              :items="data"
                              :expanded.sync="expanded"
                              item-key="name"
                              show-expand
                              class="elevation-1"
                            >
                              <template v-slot:expanded-item="{ headers, item }">
                                <td :colspan="headers.length">
                                  <br>
                                  <table class="table table-bordered">
                                    <thead>
                                      <tr>
                                        <td v-for="(item, index) in field_data" :key="index">{{item.label}} </td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="(value1, index) in item.data_tambahan" :key="index" >
                                        <td v-for="(value2, index) in field_data" :key="index" >
                                          {{value1[value2.name]}}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  </td>
                              </template>
                            </v-data-table>
                        </div>
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
import { mapActions,mapGetters } from "vuex";
import template from '@/components/template/admin'
export default {
  name: 'Home',
  data(){
    return {
      judul : this.$route.params.id,
      breadscrump :[
        {url : '/table/'+this.judul, judul : 'Tambah Data', class : 'breadcrumb-item', icon : 'zmdi zmdi-file-text'}
      ],
      expanded: [],
      singleExpand: false,
    }
  },
  components: {
    appTemplate : template,
  },
  watch: {
    '$route.params.id': function () {
      this.initDatabase(this.$route.params.id);
      this.redeclareData();
    },
  },
  computed :{
    ...mapGetters('tableDatabase',{
      data : 'get_data_umum',
      field_umum : 'field_umum',
      field_data : 'field_data',
    })
  },
  methods: {
    ...mapActions('tableDatabase',[
      'initDatabase', 'redeclareData'
      ]),
  },
  created(){
    this.initDatabase(this.$route.params.id);
    this.redeclareData();
  }
}
</script>
<style  scoped>
</style>

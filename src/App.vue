<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
  export default {
      methods: {
        ...mapActions([
          'initListDatabase','tryAutoLogin'
        ])
      },
      computed:{
        ...mapGetters([
          'checkEmtyListDatabase'
        ])
      },
      beforeCreate(){
        document.body.classList.add('theme-green')
        document.body.classList.add('ls-toggle-menu')
      },
      created(){
        this.tryAutoLogin();
        if(this.checkEmtyListDatabase){
          this.initListDatabase();
        }
      }
  }
</script>


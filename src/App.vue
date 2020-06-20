<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
      methods: {
      },
      beforeCreate(){
        document.body.classList.add('theme-green')
        document.body.classList.add('ls-toggle-menu')
      }
  }
</script>
<style >
  @import './assets/css/bootstrap.css';
  @import './assets/css/main.css';
  @import './assets/css/hm-style.css';
  @import './assets/css/color_skins.css';
</style>


<template>
    <div>
        <app-header></app-header>
        <transition name="slide" mode="out-in">
            <section class="content home">
            <div class="block-header">
                <app-breadscrump :title_utama="title_utama" :title_kecil="title_kecil" :breadscrumb="breadscrumb"></app-breadscrump>
            </div>
            <div class="container-fluid">
                <slot></slot>
            </div>
            </section>
        </transition>
    </div>
</template>
<script>
import header from '../layouts/header'
import breadscrump from '../layouts/breadscrump'
export default {
    props:['title_utama','title_kecil','breadscrumb'],
    components :{
        appHeader : header,
        appBreadscrump : breadscrump,
    },
}
</script>
<style scoped>
  .slide-enter-active{
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 200ms ease-in-out forwards;
  }

  @keyframes  slide-in {
    from{
      transform: translateY(-30px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from{
      transform: translateY(0);
      opacity: 1;
    }
    to{
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

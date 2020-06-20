<template>
    <div>
        <app-header></app-header>
        <section class="content home">
        <div class="block-header">
            <app-breadscrump :title_utama="title_utama" :title_kecil="title_kecil" :breadscrumb="breadscrumb"></app-breadscrump>
        </div>
        <div class="container-fluid">
            <slot></slot>
        </div>
        </section>
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

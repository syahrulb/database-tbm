<template>
    <div>
        <app-header></app-header>
        <section class="content ">
            <div class="block-header">
            </div>
            <div class="container-fluid">
                <slot></slot>
            </div>
        </section>
    </div>
</template>
<script>
import header from '../layouts/header'
export default {
    props:['title_utama','title_kecil','breadscrumb'],
    components :{
        appHeader : header,
    },
}
</script>

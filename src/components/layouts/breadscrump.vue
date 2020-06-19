<template>
    <div>
        <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12">
                <h2>{{title_utama}}
                <small>{{title_kecil}} </small>
                </h2>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
                <ul class="breadcrumb float-md-right ">
                <app-list-breadscrump :lists="breadscrumb"></app-list-breadscrump>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import listbreadscrump from '../listBeardscrump'
export default {
    props:['title_utama','title_kecil','breadscrumb'],
    components:{
        appListBreadscrump : listbreadscrump
    }
}
</script>
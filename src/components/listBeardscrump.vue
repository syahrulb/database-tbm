<template>
    <div>
        <li v-for="(item, index) in lists" :key="index" class="breadcrumb-item">
            <a :href="item.url">
            <i class="zmdi zmdi-book"></i> 
            {{item.judul}}
            </a>
        </li>
    </div>
</template>
<script>
    export default {
        props :['lists']
    }
</script>
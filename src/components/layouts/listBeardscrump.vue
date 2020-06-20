<template>
    <div>
        <router-link v-for="(item, index) in lists" 
                    :key="index" 
                    :class="item.class"
                    tag="li" :to="item.url">
            <a href="javascript:">
                <i class="zmdi zmdi-book"></i> 
                {{item.judul}}
            </a>
        </router-link>
    </div>
</template>
<script>
    export default {
        props :['lists']
    }
</script>
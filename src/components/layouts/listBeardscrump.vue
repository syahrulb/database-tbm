<template>
    <div>
        <router-link v-for="(item, index) in lists" 
                    :key="index" 
                    :class="item.class"
                    tag="li" :to="item.url">
            <a href="javascript:">
                <i :class="item.icon"></i> 
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
<template>
    <main class="flex-container">
        <Menu/>
        <Content></Content>
    </main>
</template>

<script>

import Menu from "@/components/Admin/Menu.vue";
import Content from "@/components/Admin/Content.vue";

export default {
    name:'Main',
    components:{
        Menu,
        Content
    }
}
</script>

<style scoped>
.flex-container{
    display: flex;
    flex-direction: row-reverse;
}
main{
    margin: 0;
    padding: 0;
}
</style>


<template>
  <div>
    <Navbar></Navbar>
    <Main></Main>
  </div>
</template>

<script>

import Navbar from "@/components/Admin/Navbar.vue";
import Main from "@/components/Admin/Main.vue";
import router from '@/admin_router'

export default {
  router,
  name:'admin',
  components:{
    Navbar,
    Main
  }
}
</script>

<style scoped>
body{
  height: 100vh;
  background-color: red;
}
</style>



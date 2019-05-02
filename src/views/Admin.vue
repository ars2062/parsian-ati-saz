<template>
<<<<<<< HEAD
  <div>
    <Navbar></Navbar>
    <Main></Main>
  </div>
=======
  <div></div>
>>>>>>> 189af4f767c20fa6ce1118770ba3dd9dde5b6062
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



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
  name:'Admin',
  components:{
    Navbar,
    Main
  }
}
</script>

<style scoped>

</style>



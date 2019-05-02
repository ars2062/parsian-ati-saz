<template>
  <Layout></Layout>
</template>

<script>

import Layout from "@/components/Admin/Layout.vue";
import router from '@/admin_router'

export default {
  router,
  name:'admin',
  components:{
    Layout
  }
}
</script>


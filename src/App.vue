<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <Nav v-if="!this.$route.path.includes('admin')"></Nav>
    <Loading/>
    <router-view/>
  </div> 
</template>

<script>
import Nav from '@/components/Nav.vue';
import Loading from '@/components/Loading.vue';
export default {
  name: 'App',
  components: {
    Nav,
    Loading
  }
}
</script>

<style>
</style>

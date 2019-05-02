<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <Nav v-if="this.$route.path!=='/admin'"></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
</style>

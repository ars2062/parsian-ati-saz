<template>
  <div id="app">
    <Loading/>
    <LoadingManual id="loadingmanual"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <Nav v-if="!this.$route.path.includes('admin')" v-cloak></Nav>
    <router-view v-cloak/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Loading from "@/components/Loading.vue";
import LoadingManual from "@/components/LoadingManual.vue";
import ScrollOut from "scroll-out";
window.addEventListener('load',()=>{document.getElementById('loadingmanual').style.display='none'})
export default {
  name: "App",
  components: {
    Nav,
    Loading,
    LoadingManual
  },
  mounted() {
    this.$store.commit("stop_loading");
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
      treshold: 1
    });
    //this.$refs["loadingmanual"].display = false;
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style lang='scss'>
[v-cloak] {
  display: none;
}

[data-scroll] {
  transition: transform 2s, opacity 2s;
}

.fade-in[data-scroll="in"] {
  opacity: 1;
}

.fade-in[data-scroll="out"] {
  opacity: 0;
}

.slide-in-right[data-scroll="in"] {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-right[data-scroll="out"] {
  transform: translateX(100px);
  opacity: 0;
}

.slide-in-left[data-scroll="in"] {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-left[data-scroll="out"] {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-in-top[data-scroll="in"] {
  transform: translateY(0);
  opacity: 1;
}

.slide-in-top[data-scroll="out"] {
  transform: translateY(-100px);
  opacity: 0;
}

.slide-in-bottom[data-scroll="in"] {
  transform: translateY(0);
  opacity: 1;
}

.slide-in-bottom[data-scroll="out"] {
  transform: translateY(100px);
  opacity: 0;
}
</style>

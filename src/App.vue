<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <Nav v-if="!this.$route.path.includes('admin')"></Nav>
    <Loading/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Loading from "@/components/Loading.vue";
import ScrollOut from "scroll-out";

export default {
  name: "App",
  components: {
    Nav,
    Loading
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      once: false,
      treshold: 1
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style lang='scss'>
[data-scroll] {
  transition: transform 1s,opacity 1s;
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
  transform: translateX(100px);
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

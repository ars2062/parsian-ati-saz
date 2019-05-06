import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

const app=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to,from,next)=>{
  app.$store.commit('start_loading');
  setTimeout(() => {
    next();
  }, 1000)
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  app.$store.commit('stop_loading');
});
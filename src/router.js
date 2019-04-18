import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Masterworkers from "./views/Masterworkers.vue";
import NezamRules from "./views/NezamRules.vue";
import PropertyDetail from "./views/PropertyDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/masters",
      name: "masters",
      component: Masterworkers
    },
    {
      path: "/rules",
      name: "rules",
      component: NezamRules
    },
    {
      path: "/property-detail",
      name: "property-detail",
      component: PropertyDetail
    }
  ]
});
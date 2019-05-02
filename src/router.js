import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Masterworkers from "./views/Masterworkers.vue";
import PropertyDetail from "./views/PropertyDetail.vue";
import BuildingEquipmentDetail from "./views/BuildingEquipmentDetail.vue";
import AdvertisementRegistration from "./views/AdvertisementRegistration.vue";
import PhoneConfirmation from "./views/PhoneConfirmation.vue";
import SupervisorConfirmation from "./views/SupervisorConfirmation.vue";
import YourAccount from "./views/YourAccount.vue";
import Admin from "./views/Admin.vue";

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
      path: "/property-detail",
      name: "property-detail",
      component: PropertyDetail
    },
    {
      path: "/building-equipment-detail",
      name: "building-equipment-detail",
      component: BuildingEquipmentDetail
    },
    {
      path: "/advertisement-registration",
      name: "advertisement-registration",
      component: AdvertisementRegistration
    },
    {
      path: "/phone-confirmation",
      name: "phone-confirmation",
      component: PhoneConfirmation
    },
    {
      path: "/supervisor-confirmation",
      name: "supervisor-confirmation",
      component: SupervisorConfirmation
    },
    {
      path: "/your-account",
      name: "your-account",
      component: YourAccount
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
  ]
});
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Masterworkers from "./views/Masterworkers.vue";
import PropertyDetail from "./views/PropertyDetail.vue";
import BuildingEquipmentDetail from "./views/BuildingEquipmentDetail.vue";
import MasterWorkerDetail from "./views/MasterWorkerDetail.vue";
import AdvertisementRegistration from "./views/AdvertisementRegistration.vue";
import PhoneConfirmation from "./views/PhoneConfirmation.vue";
import SupervisorConfirmation from "./views/SupervisorConfirmation.vue";
import MyAccount from "./views/MyAccount.vue";
import Admin from "./views/Admin.vue";
import PartnershipList from "./views/PartnershipList.vue";
import SellList from "./views/SellList.vue";
import ProductList from "./views/ProductList.vue";
import ClutterList from "./views/ClutterList.vue";
import Test from "./views/Test.vue";
import Contact from "./views/Contact.vue";
import SearchResult from "./views/SearchResult.vue";

Vue.use(Router);
let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/master-workers",
      name: "master-workers",
      component: Masterworkers
    },
    {
      path: "/property-detail",
      name: "property-detail",
      component: PropertyDetail
    },
    {
      path: "/product-detail",
      name: "product-detail",
      component: BuildingEquipmentDetail
    },
    {
      path: "/master-worker-detail",
      name: "master-worker-detail",
      component: MasterWorkerDetail
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
      path: "/my-account",
      name: "my-account",
      component: MyAccount
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/partnerships",
      name: "partnerships",
      component: PartnershipList
    },
    {
      path: "/sells",
      name: "sells",
      component: SellList
    },
    {
      // for gold melks
      path: "/clutters",
      name: "clutters",
      component: ClutterList
    },
    {
      path: "/product-list",
      name: "product-list",
      component: ProductList
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/search-result",
      name: "search-result",
      component: SearchResult
    }
  ]
});

export default router;
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Masterworkers from "./views/Masterworkers.vue";
import PropertyDetail from "./views/PropertyDetail.vue";
import BuildingEquipmentDetail from "./views/BuildingEquipmentDetail.vue";
import MasterWorkerDetail from "./views/MasterWorkerDetail.vue";
import AdvertisementRegistration from "./views/AdvertisementRegistration.vue";
import PhoneConfirmation from "./views/PhoneConfirmation.vue";
import PayPage from "./views/PayPage.vue";
import MyAccount from "./views/MyAccount.vue";
import Admin from "./views/Admin.vue";
import PartnershipList from "./views/PartnershipList.vue";
import SellList from "./views/SellList.vue";
import ProductList from "./views/ProductList.vue";
import ClutterList from "./views/ClutterList.vue";
import Test from "./views/Test.vue";
import Contact from "./views/Contact.vue";
import SearchResult from "./views/SearchResult.vue";

import Property from "./views/Admin/Property/Index.vue";
import PartnershipForm from "./views/Admin/Property/PartnershipForm.vue";
import SellForm from "./views/Admin/Property/SellForm.vue";
import PropertyList from "./views/Admin/Property/List.vue";

import Product from "./views/Admin/Product/Index.vue";
import ProductForm from "./views/Admin/Product/Form.vue";
import DashboardProductList from "@/views/Admin/Product/List.vue";

import MasterWorker from "./views/Admin/MasterWorker/Index.vue";
import MasterWorkerForm from "./views/Admin/MasterWorker/Form.vue";
import DashboardMasterWorkerList from "@/views/Admin/MasterWorker/List.vue";

import Adviser from "./views/Admin/Adviser/Index.vue";
import AdviserForm from "./views/Admin/Adviser/Form.vue";
import DashboardAdviserList from "@/views/Admin/Adviser/List.vue";

import DashboardContactList from "@/views/Admin/Contact/List.vue";

import DashboardVerifingList from "@/views/Admin/Verifing/List.vue";

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
      path: "/pay-page",
      name: "pay-page",
      component: PayPage
    },
    {
      path: "/my-account",
      name: "my-account",
      component: MyAccount
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
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          path: "property",
          name: "property",
          component: Property
        },
        {
          path: "sell-form",
          name: "sell-form",
          component: SellForm
        },
        {
          path: "partnership-form",
          name: "partnership-form",
          component: PartnershipForm
        },
        {
          path: "property-list",
          name: "property-list",
          component: PropertyList
        },
        {
          path: "product",
          name: "product",
          component: Product
        },
        {
          path: "dashboard-product-list",
          name: "dashboard-product-list",
          component: DashboardProductList
        },
        {
          path: "product-form",
          name: "product-form",
          component: ProductForm
        },
        {
          path: "master-worker",
          name: "master-worker",
          component: MasterWorker
        },
        {
          path: "dashboard-master-worker-list",
          name: "dashboard-master-worker-list",
          component: DashboardMasterWorkerList
        },
        {
          path: "master-worker-form",
          name: "master-worker-form",
          component: MasterWorkerForm
        },
        {
          path: "adviser",
          name: "adviser",
          component: Adviser
        },
        {
          path: "dashboard-adviser-list",
          name: "dashboard-adviser-list",
          component: DashboardAdviserList
        },
        {
          path: "adviser-form",
          name: "adviser-form",
          component: AdviserForm
        },
        {
          path: "dashboard-contact-list",
          name: "dashboard-contact-list",
          component: DashboardContactList
        },
        {
          path: "dashboard-verifing-list",
          name: "dashboard-verifing-list",
          component: DashboardVerifingList
        }
      ]
    }
  ]
});

export default router;

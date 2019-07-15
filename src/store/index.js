import Vue from "vue";
import Vuex from "vuex";
import contact from "./modules/admin/contact";
import adviser from "./modules/admin/adviser";
import home from "./modules/home";
import account from "./modules/account";
import advert from "./modules/advert";
import admin_advert from "./modules/admin/advert";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules: {
    contact: contact,
    adviser: adviser,
    home: home,
    account: account,
    advert: advert,
    admin_advert: admin_advert
  },
  state: {
    loading: true,
    // this object is for property pages
    detail_object: {},
    cities: []
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    detail_object: state => {
      return state.detail_object;
    }
  },
  mutations: {
    stop_loading(state) {
      state.loading = false;
    },
    start_loading(state) {
      state.loading = true;
    },
    set_detail_object(state, obj) {
      state.detail_object = obj;
    }
  },
  actions: {}
});

import Vue from "vue";
import Vuex from "vuex";
import contact from "./modules/contact";
import adviser from "./modules/adviser";
import home from "./modules/home";
import account from "./modules/account";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules: {
    contact: contact,
    adviser: adviser,
    home: home,
    account: account
  },
  state: {
    loading: true,
    // this object is for property pages
    detail_object: {}
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
    },
    
  },
  actions: {

  }
});

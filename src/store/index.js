import Vue from "vue";
import Vuex from "vuex";
import account from "../store/modules/account";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules:{
      account:account
  },
  state:{
      authenticated:false,
  }
});
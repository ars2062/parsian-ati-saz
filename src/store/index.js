import Vue from "vue";
import Vuex from "vuex";
import contact from "./modules/contact";
import adviser from "./modules/adviser";
import modal from "./modules/modal";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules:{
    contact:contact,
    adviser:adviser,
    modal:modal
  },
  state:{
      authenticated:false,
  },
  actions:{
    
  }
});
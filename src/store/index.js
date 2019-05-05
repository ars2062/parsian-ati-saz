import Vue from "vue";
import Vuex from "vuex";
import contact from "./modules/contact";
import adviser from "./modules/adviser";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules:{
    contact:contact,
    adviser:adviser
  },
  state:{
      authenticated:false,
  },
  actions:{
    
  }
});
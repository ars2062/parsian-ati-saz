import Vue from "vue";
import Vuex from "vuex";
import consts from "../consts";
import axios from "axios";
import contact from "./modules/contact";

Vue.use(Vuex);

// load modules from folder and save this file

export default new Vuex.Store({
  modules:{
    contact:contact,
  },
  state:{
      authenticated:false,
  },
  actions:{
    
  }
});
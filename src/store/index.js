import Vue from "vue";
import Vuex from "vuex";
import contact from "./modules/admin/contact";
import adviser from "./modules/admin/adviser";
import home from "./modules/home";
import account from "./modules/account";
import advert from "./modules/advert";
import admin_advert from "./modules/admin/advert";
import Axios from "axios";
import consts from "../consts";

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
    cities: [],
    related_adverts:[]
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    detail_object: state => {
      return state.detail_object;
    },
    cities: state => {
      return state.cities;
    },
    related_adverts: state => {
      return state.related_adverts;
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
    set_cities(state,cities){
      state.cities = cities;
    },
    set_related_adverts(state,adverts){
      state.related_adverts = adverts;
    }
  },
  actions: {
    fetch_cities:async ({commit})=>{

      await Axios.get(
        consts.api_urls.city,
        {}
      ).then(function(response) {
        commit("set_cities", response.data);
        console.log(response);
        commit("stop_loading", { root: true });
      })
      .catch(function(error) {
        console.error(error);
        commit("stop_loading", { root: true });
      });
    },
    fetch_related_adverts: async ({commit},{advert_type,advert_id}) => {

      await Axios.get(
        consts.api_urls.related,
        {
          params:{
            advert_type:advert_type,
            advert_id:advert_id,
          }
        }
      ).then(function(response) {
        commit("set_related_adverts", response.data);
        console.log(response);
        commit("stop_loading");
      })
      .catch(function(error) {
        console.error(error);
        commit("stop_loading");
      });

    }

  }
});

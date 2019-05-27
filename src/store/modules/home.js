import consts from "../../consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    product_adverts: [],
    sell_adverts: [],
    partnership_adverts: [],
    master_adverts: [],
    gold_melks: [],
    search_results: [],
    cities:[],
    // this state field is for add contact to admin 
    msg:'' 
  },
  getters: {
    product_adverts: state => {
      return state.product_adverts;
    },
    sell_adverts: state => {
      return state.sell_adverts;
    },
    partnership_adverts: state => {
      return state.partnership_adverts;
    },
    master_adverts: state => {
      return state.master_adverts;
    },
    get_search_result: state => {
      return state.search_results;
    },
    recent: state => {
      var recent = Array(2);
      recent[0] = state.partnership_adverts[state.partnership_adverts.length - 1] ; 
      recent[1] = state.sell_adverts[state.sell_adverts.length - 1] ; 
      return recent;
    },
    gold_melks: state => {
      return state.gold_melks;
    },
    cities: state => {
      return state.cities;
    },
    msg:state => {
      return state.msg;
    }
  },
  mutations: {
    set_adverts: (state, server_response) =>{
      state.product_adverts = server_response.home_adverts;
      state.master_adverts = server_response.professor_adverts;
      state.sell_adverts = server_response.clutter_sell_adverts;
      state.partnership_adverts = server_response.clutter_partnership_adverts;
      state.gold_melks = server_response.gold_melks;

      // set cities in rootstate
      state.cities = server_response.cities;
    },
    get_advert(state, { type, id }) {
      if (type == 1) {
        // is product advert
        state.detail_object = state.product_adverts.find(obj => obj.id == id);
      } else if (type == 2) {
        // is master advert
        state.detail_object = state.master_adverts.find(obj => obj.id == id);
      } else if (type == 3) {
        // is sell advert
        state.detail_object = state.sell_adverts.find(obj => obj.id == id);
      } else {
        // is partnership advert
        state.detail_object = state.partnership_adverts.find(
          obj => obj.id == id
        );
      }
    },
    set_search_result(state, res) {
      state.search_results = res;
    },
    set_cities(state,cities){
      state.cities = cities;
    },
    set_add_contact_msg: (state,msg)=> {
      state.msg = msg;
    }
  },
  actions: {
    // tested
    fetch_adverts: ({ commit }) => {

      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.home)
        .then(function(response) {
          commit("stop_loading",{root:true});

          commit("set_adverts", response.data);
        })
        .catch(function(error) {
          commit("stop_loading",{root:true});
        });
    },
    // tested
    search: ({ commit },{ min_metrazh, max_metrazh, cities = [], advert_type }) => {

      commit("start_loading", { root: true });

      Axios.post(
        consts.api_urls.search + advert_type,
        {
          min_metrazh: min_metrazh,
          max_metrazh: max_metrazh,
          cities: cities
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(function(response) {
          commit("set_search_result", response.data);
          
          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    send_contact:({commit},{name,subject,phone,description})=>{

      commit("start_loading", { root: true });

      Axios.post(consts.api_urls.add_contact,{
        name:name,
        subject:subject,
        phone:phone,
        description:description
      },{
        headers:{ 'Content-Type': 'application/json' }
      }).then(response => {
        commit('set_add_contact_msg',response.data.message);
      }).error(error => {
        commit('set_add_contact_msg','خطا در ارتباط با میزبان');
      });
    }
  }
};

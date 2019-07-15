import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    product_adverts: [],
    recent: [],
    sell_adverts: [],
    master_adverts: [],
    gold_melks: [],
    search_results: [],
    // this state field is for add contact to admin
    msg: "",
    sell_files: [],
    partnership_files: [],
    all_products: [],
    all_masters: [],
    all_golds: []
  },
  getters: {
    product_adverts: state => {
      return state.product_adverts;
    },
    sell_adverts: state => {
      return state.sell_adverts;
    },
    master_adverts: state => {
      return state.master_adverts;
    },
    get_search_result: state => {
      return state.search_results;
    },
    recent: state => {
      return state.recent;
    },
    gold_melks: state => {
      return state.gold_melks;
    },
    cities: state => {
      return state.cities;
    },
    msg: state => {
      return state.msg;
    },
    sell_files: state => {
      return state.sell_files;
    },
    partnership_files: state => {
      return state.partnership_files;
    },
    get_all_products: state => {
      return state.all_products;
    },
    get_all_masters: state => {
      return state.all_masters;
    },
    get_all_golds: state => {
      return state.all_golds;
    }
  },
  mutations: {
    set_adverts: (state, server_response) => {
      state.product_adverts = server_response.products;
      state.master_adverts = server_response.masters;
      // state.sell_adverts = server_response.clutter_sell_adverts;
      state.recent = server_response.recent;
      state.gold_melks = server_response.golds;

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
    set_cities(state, cities) {
      state.cities = cities;
    },
    set_add_contact_msg: (state, msg) => {
      state.msg = msg;
    },
    set_sell_files: (state, files) => {
      state.sell_files = files;
    },
    set_partnership_files: (state, files) => {
      state.partnership_files = files;
    },
    set_all_products: (state, files) => {
      state.all_products = files;
    },
    set_all_masters: (state, files) => {
      state.all_masters = files;
    },
    set_all_golds: (state, files) => {
      state.all_golds = files;
    }
  },
  actions: {
    // tested
    fetch_adverts: async ({ commit }) => {
      await Axios.get(consts.api_urls.home)
        .then(function(response) {
          commit("set_adverts", response.data);
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    // tested
    search: async (
      { commit },
      { min_metrazh, max_metrazh, cities = [], advert_type }
    ) => {
      commit("start_loading", { root: true });
      console.log(advert_type)
      await Axios.get(
        consts.api_urls.search,
        {
          min_metrazh: min_metrazh,
          max_metrazh: max_metrazh,
          cities: cities,
          advert_type: advert_type
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(function(response) {
          commit("set_search_result", response.data);
          console.log(response);
          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          console.error(error);
          commit("stop_loading", { root: true });
        });
    },
    send_contact: async ({ commit }, { name, subject, phone, description }) => {
      commit("start_loading", { root: true });

      await Axios.post(
        consts.api_urls.add_contact,
        {
          name: name,
          subject: subject,
          phone: phone,
          description: description
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
        .then(response => {
          commit("set_add_contact_msg", response.data.message);
        })
        .error(error => {
          commit("set_add_contact_msg", "خطا در ارتباط با میزبان");
        });
    },
    get_sell_files: ({ commit }) => {
      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.sell_files, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          commit("set_sell_files", response.data);

          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    get_partnership_files: ({ commit }) => {
      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.partnership_files, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          commit("set_partnership_files", response.data);

          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    get_all_products: ({ commit }) => {
      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.all_products, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          commit("set_all_products", response.data);

          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    get_all_masters: ({ commit }) => {
      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.all_masters, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          commit("set_all_masters", response.data);

          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    },
    get_all_golds: ({ commit }) => {
      commit("start_loading", { root: true });

      Axios.get(consts.api_urls.all_golds, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          commit("set_all_golds", response.data);

          commit("stop_loading", { root: true });
        })
        .catch(function(error) {
          commit("stop_loading", { root: true });
        });
    }
  }
};

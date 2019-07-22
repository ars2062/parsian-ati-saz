import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => {
      return state.detail;
    }
  },
  mutations: {
    set_detail: (state, obj) => {
      state.detail = obj;
    }
  },
  actions: {
    sell: async ({ commit }, { id }) => {
      await Axios.get(consts.api_urls.home_screen_sell_detail + id)
        .then(response => {
          commit("set_detail", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    partnership: async ({ commit }, { id }) => {
      await Axios.get(consts.api_urls.home_screen_partnership_detail + id)
        .then(response => {
          commit("set_detail", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    master: async ({ commit }, { id }) => {
      await Axios.get(consts.api_urls.home_screen_master_detail + id)
        .then(response => {
          commit("set_detail", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    product: async ({ commit }, { id }) => {
      await Axios.get(consts.api_urls.home_screen_product_detail + id)
        .then(response => {
          commit("set_detail", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};

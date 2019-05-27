import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    advert_id: 0,
    status: "",
    errors: {
      message: ""
    }
  },
  getters: {
    errors: state => {
      return state.errors;
    },
    advert_id: state => {
      return state.advert_id;
    },
    message: state => {
      return state.errors;
    }
  },
  mutations: {
    set_errors: (state, errors) => {
      state.errors = errors;
    },
    set_advert_id: (state, value) => {
      state.advert_id = value;
    },
    set_message: (state, value) => {
      state.errors.message = value;
    },
    set_status: (state, value) => {
      state.status = value;
    },
    clear_errors: state => {
      state.errors = { message: "" };
    }
  },
  actions: {
    // for sell advert
    add_sell_advert: ({ commit }, { advert_object }) => {
      commit("set_status", "create");
      Axios.post(consts.api_urls.add_sell_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_advert_id", response.data.advert_id);
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    verify_sell_advert: ({ commit }, { advert_id, code }) => {
      commit("set_status", "verify");
      Axios.post(
        consts.api_urls.verify_sell_advert + advert_id,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      )
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_status", "admin_verify");
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    remove_sell_advert: ({ commit }, { advert_id }) => {
      Axios.delete(consts.api_urls.remove_sell_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    edit_sell_advert:({commit},{advert_id,advert_object})=>{
      Axios.put(consts.api_urls.edit_sell_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
      }).catch(error=>{
        commit("set_errors", error.response.data);
      });
    },

    // for partnership advert
    add_partnership_advert: ({ commit }, { advert_object }) => {
      commit("set_status", "create");
      Axios.post(consts.api_urls.add_partnership_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_advert_id", response.data.advert_id);
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    verify_partnership_advert: ({ commit }, { advert_id, code }) => {
      commit("set_status", "verify");
      Axios.post(
        consts.api_urls.verify_partnership_advert + advert_id,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      )
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_status", "admin_verify");
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    remove_partnership_advert: ({ commit }, { advert_id }) => {
      Axios.delete(consts.api_urls.remove_partnership_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    edit_partnership_advert: ({commit},{advert_id,advert_object})=>{
      Axios.put(consts.api_urls.edit_partnership_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
      }).catch(error=>{
        commit("set_errors", error.response.data);
      });
    },
    request_payment: ({ commit }, { advert_id, type }) => {
      Axios.post(
        consts.api_urls.request_payment_url + advert_id,
        { type: type },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      )
        .then(response => {
          if (!response.data.result) {
            commit("set_message", response.data.message);
          } else {
            commit("set_status", "payment");
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },

    // for product advert
    add_product_advert: ({ commit }, { advert_object }) => {
      commit("set_status", "create");
      Axios.post(consts.api_urls.add_product_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_advert_id", response.data.advert_id);
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    verify_product_advert: ({ commit }, { advert_id, code }) => {
      commit("set_status", "verify");
      Axios.post(
        consts.api_urls.verify_product_advert + advert_id,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      )
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_status", "admin_verify");
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    remove_product_advert: ({ commit }, { advert_id }) => {
      Axios.delete(consts.api_urls.remove_product_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    edit_product_advert: ({commit},{advert_id,advert_object})=>{
      Axios.put(consts.api_urls.edit_product_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
      }).catch(error=>{
        commit("set_errors", error.response.data);
      });
    },
    // for masters advert
    add_master_advert: ({ commit }, { advert_object }) => {
      commit("set_status", "create");
      Axios.post(consts.api_urls.add_professor_advert_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_advert_id", response.data.advert_id);
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    verify_master_advert: ({ commit }, { advert_id, code }) => {
      commit("set_status", "verify");
      Axios.post(
        consts.api_urls.verify_professor_advert_advert + advert_id,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      )
        .then(response => {
          commit("set_message", response.data.message);
          if (response.data.result) {
            commit("set_status", "admin_verify");
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    remove_master_advert: ({ commit }, { advert_id }) => {
      Axios.delete(consts.api_urls.remove_professor_advert_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    edit_master_advert: ({commit},{advert_id,advert_object})=>{
      Axios.put(consts.api_urls.edit_professor_advert_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
      }).catch(error=>{
        commit("set_errors", error.response.data);
      });
    },
  }
};

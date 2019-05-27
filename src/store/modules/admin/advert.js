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
      commit('start_loading',{root:true});
      commit("set_status", "create");
      Axios.post(consts.api_urls.admin_advert_area.add_sell_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    remove_sell_advert: ({ commit }, { advert_id }) => {
      commit('start_loading',{root:true});
      Axios.delete(consts.api_urls.admin_advert_area.remove_sell_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    edit_sell_advert:({commit},{advert_id,advert_object})=>{
      commit('start_loading',{root:true});
      Axios.put(consts.api_urls.admin_advert_area.edit_sell_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
        commit('stop_loading',{root:true});
      }).catch(error=>{
        commit("set_errors", error.response.data);
        commit('stop_loading',{root:true});
      });
    },

    // for partnership advert
    add_partnership_advert: ({ commit }, { advert_object }) => {
      commit('start_loading',{root:true});
      commit("set_status", "create");
      Axios.post(consts.api_urls.admin_advert_area.add_partnership_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    remove_partnership_advert: ({ commit }, { advert_id }) => {
      commit('start_loading',{root:true});
      Axios.delete(consts.api_urls.admin_advert_area.remove_partnership_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    edit_partnership_advert: ({commit},{advert_id,advert_object})=>{
      commit('start_loading',{root:true});
      Axios.put(consts.api_urls.admin_advert_area.edit_partnership_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
        commit('stop_loading',{root:true});
      }).catch(error=>{
        commit("set_errors", error.response.data);
        commit('stop_loading',{root:true});
      });
    },

    // for product advert
    add_product_advert: ({ commit }, { advert_object }) => {
      commit('start_loading',{root:true});
      commit("set_status", "create");
      Axios.post(consts.api_urls.admin_advert_area.add_product_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    remove_product_advert: ({ commit }, { advert_id }) => {
      commit('start_loading',{root:true});
      Axios.delete(consts.api_urls.admin_advert_area.remove_product_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    edit_product_advert: ({commit},{advert_id,advert_object})=>{
      commit('start_loading',{root:true});
      Axios.put(consts.api_urls.admin_advert_area.edit_product_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
        commit('stop_loading',{root:true});
      }).catch(error=>{
        commit("set_errors", error.response.data);
        commit('stop_loading',{root:true});
      });
    },
    // for masters advert
    add_master_advert: ({ commit }, { advert_object }) => {
      commit('start_loading',{root:true});
      commit("set_status", "create");
      Axios.post(consts.api_urls.admin_advert_area.add_professor_advert_advert, advert_object, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('start_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('start_loading',{root:true});
          }
        });
    },
    remove_master_advert: ({ commit }, { advert_id }) => {
      commit('start_loading',{root:true});
      Axios.delete(consts.api_urls.admin_advert_area.remove_professor_advert_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          commit("set_message", response.data.message);
          commit('stop_loading',{root:true});
        })
        .catch(error => {
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
            commit('stop_loading',{root:true});
          }
        });
    },
    edit_master_advert: ({commit},{advert_id,advert_object})=>{
      commit('start_loading',{root:true});
      Axios.put(consts.api_urls.admin_advert_area.edit_professor_advert_advert+advert_id,advert_object,{
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit("set_message", response.data.message);
        commit('stop_loading',{root:true});
      }).catch(error=>{
        commit("set_errors", error.response.data);
        commit('stop_loading',{root:true});
      });
    },


    //this is for verify advert by admin
    verify_advert:({commit},{advert_id,type})=>{
      commit('start_loading',{root:true});

      Axios.post(consts.api_urls.admin_advert_area.verify_advert+advert_id,{type:type},{
        headers:{
          'Content-Type':'application/json',
          'Authorization':localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit('stop_loading',{root:true});

        commit('set_message',response.data.message);
      }).catch(error=>{

      });
    }
  }
};

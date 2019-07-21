import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    partnership_adverts: [],
    status: 'create',
    errors: {},
    server_message: '',
    detail: {}
  },
  getters: {
    partnership_adverts: state => {
      return state.partnership_adverts;
    },
    status: state => {
      return state.status;
    },
    errors: state => {
      return state.errors;
    },
    server_message: state => {
      return state.server_message;
    },
    detail: state => {
      return state.detail;
    }
  },
  mutations: {
    set_adverts: (state, adverts) => {
      state.partnership_adverts = adverts;
    },
    set_status: (state, status) => {
      state.status = status;
    },
    set_errors: (state, errors) => {
      state.errors = errors;
    },
    set_server_message: (state, msg) => {
      state.server_message = msg;
    },
    set_detail: (state, obj) => {
      state.detail = obj;
    }
  },
  actions: {
    // for partnership advert
    add_partnership_advert: async ({ commit }, { advert_object }) => {


      await Axios.post(consts.api_urls.add_partnership_advert,
        advert_object,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        })
        .then(response => {

          alert('ایجاد شد');

          commit('set_status', 'verify');

        })
        .catch(error => {
          console.log(error);
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    verify_partnership_advert: async ({ commit }, { advert_id, phone, code }) => {

      await Axios.post(
        consts.verify_partnership_advert + advert_id,
        {
          phone: phone,
          code: code
        },{
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("user.token")
          }
        }
      ).then(response => {

        commit('set_server_message', response.data.message);

      }).catch(error => {
        console.log(error.data);
      });
    },
    remove_partnership_advert: async ({ commit, dispatch }, { advert_id }) => {


      await Axios.delete(consts.api_urls.remove_partnership_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {

          dispatch('fetch_adverts');
          alert('حذف شد');

        })
        .catch(error => {
          console.log(error);
        });
    },
    edit_partnership_advert: async ({ commit, dispatch }, { advert_id, advert_object }) => {


      await Axios.put(consts.api_urls.edit_partnership_advert + advert_id,
        advert_object,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('user.token')
          }
        }).then(response => {

          dispatch('fetch_adverts');
          alert('ویرایش شد');

        }).catch(error => {
          console.log(error);
          //commit('stop_loading',null,{root:true});
        });


    },
    fetch_adverts: async ({ commit }) => {

      await Axios.get(consts.api_urls.partnership_advert, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('user.token')
        }
      }).then(response => {
        commit("set_adverts", response.data);
        //commit('stop_loading',null,{root:true});
      }).catch(error => {
        console.log(error);
        // commit('stop_loading',null,{root:true});
      });
    },
    detail: async ({ commit }, { id }) => {

      await Axios.get(
        consts.get_partnership_advert + id,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('user.token')
          }
        }
      ).then(response => {

        commit('set_detail', response.data);

      }).catch(error => {
        console.log(error);
      });

    }


  }
};

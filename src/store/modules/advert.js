import sell from "./adverts/sell";
import partnership from "./adverts/partnership";
import product from "./adverts/product";
import master from "./adverts/master";

export default {
  namespaced: true,
  modules:{
    sell:sell,
    partnership:partnership,
    product:product,
    master:master
  },
  state: {
    user_adverts:[]
  },
  getters: {
    user_adverts:state=>{
      return state.user_adverts;
    },
    verified_user_adverts:state=>{
      return state.user_adverts.filter(arr=>arr.status === 3);
    },
    pending_user_adverts:state=>{
      return state.user_adverts.filter(arr=>arr.status === 1);
    }
  },
  mutations: {
    set_user_adverts:(state,adverts)=>{
      state.user_adverts = adverts;
    }
  },
  actions: {
    fetch_user_adverts: async ({ commit })=>{
      await Axios.get(consts.api_urls.get_user_adverts_url,
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {

          commit('set_user_adverts',response.data);
          
        })
        .catch(error => {
            console.log(error);
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    }
  }
}

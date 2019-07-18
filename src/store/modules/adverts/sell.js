import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
      sell_adverts:[],
      status:'create',
      errors:{}
  },
  getters: {
      sell_adverts:state=>{
          return state.sell_adverts;
      },
      status:state=>{
          return state.status;
      },
      errors:state=>{
          return state.errors;
      }
  },
  mutations: {
      set_adverts:(state,adverts)=>{
        state.sell_adverts = adverts;
      },
      set_status:(state,status)=>{
        state.status = status;
      },
      set_errors:(state,errors)=>{
        state.errors = errors;
      },
  },
  actions: {
    // for sell advert
    add_sell_advert: async({ commit }, { advert_object }) => {
      

      await Axios.post(consts.api_urls.add_sell_advert, 
        {
            params : advert_object
        },
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {

          alert('کد ارسال شد');

          commit('set_status','verify');
          
        })
        .catch(error => {
            console.log(error);
          if (error.response.status == 422) {
            // error
            commit("set_errors", error.response.data);
          }
        });
    },
    remove_sell_advert: async({commit,dispatch}, { advert_id }) => {
      

      await Axios.delete(consts.api_urls.remove_sell_advert + advert_id, {
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
    edit_sell_advert:async ({commit,dispatch},{advert_id,advert_object})=>{
      

      await Axios.put(consts.api_urls.edit_sell_advert + advert_id,
        {
            params : advert_object
        },
        {
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{

        dispatch('fetch_adverts');
        alert('ویرایش شد');
        
      }).catch(error=>{
        console.log(error);
        //commit('stop_loading',null,{root:true});
      });


    },
    fetch_adverts:async ({commit})=>{

        await Axios.get(consts.api_urls.sell_advert,{
            headers:{
              'Content-Type':'application/json',
              Authorization:localStorage.getItem('user.token')
            }
          }).then(response=>{
            commit("set_adverts", response.data);
            //commit('stop_loading',null,{root:true});
          }).catch(error=>{
            console.log('error');
            // commit('stop_loading',null,{root:true});
          });
    }
    
    
  }
};

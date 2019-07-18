import consts from "@/consts";
import Axios from "axios";
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
    pending_adverts:[]
  },
  getters: {
    pending_adverts:state=>{
      return state.pending_adverts;
    }
  },
  mutations: {
    set_pending_adverts:(state,adverts)=>{
      state.pending_adverts = adverts;
    }
  },
  actions: {

    //this is for verify advert by admin
    verify_advert: async ({commit},{advert_id,type})=>{
      

      await Axios.post(consts.api_urls.admin_advert_area.verify_advert + advert_id,{
        params:{
          advert_type:type
        }
      },{
        headers:{
          'Content-Type':'application/json',
          'Authorization':localStorage.getItem('user.token')
        }
      }).then(response=>{

        alert('نایید شد');

      }).catch(error=>{
        console.log(error);
      });
    },
    fetch_pending_adverts: async ({commit})=>{

      await Axios.get(consts.api_urls.admin_advert_area.pending_adverts,{
        headers:{
          'Content-Type':'application/json',
          'Authorization':localStorage.getItem('user.token')
        }
      }).then(response=>{
        commit('set_pending_adverts',response.data);
      }).catch(error=>{
        console.log(error);
      });

    }
  }
};

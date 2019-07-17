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
  state: {},
  getters: {},
  mutations: {},
  actions: {

    //this is for verify advert by admin
    verify_advert:({commit},{advert_id,type})=>{
      

      Axios.post(consts.api_urls.admin_advert_area.verify_advert + advert_id,{
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
    }
  }
};

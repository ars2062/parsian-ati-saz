import consts from "@/consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
      product_adverts:[],
      status:'create',
      errors:{}
  },
  getters: {
      product_adverts:state=>{
          return state.product_adverts;
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
        state.product_adverts = adverts;
      },
      set_status:(state,status)=>{
        state.status = status;
      },
      set_errors:(state,errors)=>{
        state.errors = errors;
      }
  },
  actions: {
    // for product advert
    add_product_advert: async({ commit }, { advert_object }) => {
      

      await Axios.post(consts.api_urls.admin_advert_area.add_product_advert, 
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

          alert('ایجاد شد');

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
    remove_product_advert: ({ commit }, { advert_id }) => {
      

      Axios.delete(consts.api_urls.admin_advert_area.remove_product_advert + advert_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        }
      })
        .then(response => {
          alert('حذف شد');
        })
        .catch(error => {
          console.log(error);
        });
    },
    edit_product_advert:async ({commit},{advert_id,advert_object})=>{
      

      await Axios.put(consts.api_urls.admin_advert_area.edit_product_advert + advert_id,
        {
            params : advert_object
        },
        {
        headers:{
          'Content-Type':'application/json',
          Authorization:localStorage.getItem('user.token')
        }
      }).then(response=>{

        alert('ویرایش شد');
        
      }).catch(error=>{
        console.log(error);
        //commit('stop_loading',null,{root:true});
      });


    },
    fetch_adverts:async ({commit})=>{

        await Axios.get(consts.api_urls.admin_advert_area.product_advert,{
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

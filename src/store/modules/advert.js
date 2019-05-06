import consts from "../../consts";
import Axios from "axios";

export default {
  namespaced: true,
  state: {
    add_result:false,
    errors:{}
  },
  getters: {
      errors:state=>{
          return state.errors;
      },
      add_result:state=>{
          return state.add_result;
      },
  },
  mutations: {
      set_errors: (state,errors)=>{
        state.errors = errors;
      },
      clear_errors: (state) =>{
          state.errors = {};
      },
      add_success: (state) =>{
          state.add_result = true;
      },

  },
  actions: {}
};

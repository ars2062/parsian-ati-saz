import consts from "../../consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        advisers: [],
        isLoading:true
    },
    getters: {
        advisers: state => {
            return state.advisers
        },
        loading:state=>{
            return state.isLoading;
        }
    },
    mutations: {
        set_advisers(state, advisers) {
            state.advisers = advisers;
        },
        del_advisers(state,id){
            state.advisers=state.advisers.filter(item => item.id !== id);
        },
        stop_loading(state){
            state.isLoading=false;
        },
        start_loading(state){
            state.isLoading=true;
        },
        notfound_error(state,error){
            alert(error);
        }
    },
    actions: {
        fetchAllAdvisers: ({ commit }) => {
            Axios.get(consts.api_url+'admin/adviser', {
                headers: {
                    'Authorization':consts.auth_header
                },
            }).then(function (response) {
                console.log(response.data);
                commit('stop_loading');
                commit('set_advisers',response.data);
            }).catch(function (error) {
                commit('stop_loading');
            });

        },
        delete: ({commit},id)=>{

            // set loading true
            commit('start_loading');

            Axios.delete(consts.api_url+'admin/contact/'+id, {
                headers: {
                    'Authorization':consts.auth_header
                },
            }).then(function (response) {
                commit('del_contact',id);

                // set loading true
                commit('stop_loading');

                if (response.data.result) {
                    commit('notfound_error','حدف شد');
                }

            }).catch(function (error) {
                commit('notfound_error','خطا در سیستم');
            });
        }
    }
}
import consts from "@/consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        advisers: [],
    },
    getters: {
        advisers: state => {
            return state.advisers
        }
    },
    mutations: {
        set_advisers(state, advisers) {
            state.advisers = advisers;
        },
        del_adviser(state,id){
            state.advisers=state.advisers.filter(item => item.id !== id);
        },
        notfound_error(state,error){
            alert(error);
        }
    },
    actions: {
        fetchAllAdvisers: ({ commit }) => {
            commit('start_loading',{root:true});
            Axios.get(consts.api_url+'admin/adviser', {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('set_advisers',response.data);
                commit('stop_loading',{root:true});
            }).catch(function (error) {
                commit('stop_loading',{root:true});
            });

        },
        delete: ({commit},id)=>{

            // set loading true
            commit('start_loading',{root:true});

            Axios.delete(consts.api_urls.remove_adviser+id, {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('del_adviser',id);

                // set loading true
                commit('stop_loading');

                if (response.data.result) {
                    commit('notfound_error','حدف شد');
                }

            }).catch(function (error) {
                commit('notfound_error','خطا در سیستم');
            });
        },
        edit: ({commit},{id,adviser_object}) =>{
            // set loading true
            commit('start_loading',{root:true});

            Axios.put(consts.api_urls.edit_adviser+id,adviser_object,{
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('del_adviser',id);

                // set loading true
                commit('stop_loading',{root:true});

                if (response.data.result) {
                    commit('notfound_error','ویرایش شد');
                }

            }).catch(function (error) {
                commit('notfound_error','ویرایش نشد');
            });
        }
    }
}
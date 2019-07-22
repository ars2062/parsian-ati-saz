import consts from "@/consts";
import Axios from "axios";

// edited

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
        add_adviser(state,adviser){
            state.advisers.push(adviser);
        },
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
        fetchAllAdvisers: async ({ commit }) => {
            //commit('start_loading',{root:true});

            await Axios.get(consts.api_url.fetch_adviser, {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('set_advisers',response.data);

                // commit('stop_loading',{root:true});

            }).catch(function (error) {
                //commit('stop_loading',{root:true});
                console.log('error');
            });

        },
        delete: async ({commit},id)=>{

            // set loading true
            //commit('start_loading',{root:true});

            await Axios.delete(consts.api_urls.remove_adviser + id, {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('del_adviser',id);

                // set loading true
                //commit('stop_loading');

                if (response.data.result) {
                    commit('notfound_error','حدف شد');
                }

            }).catch(function (error) {
                commit('notfound_error','خطا در سیستم');
            });
        },
        edit: async ({commit},{id,adviser_object}) =>{
            // set loading true
            // commit('start_loading',null,{root:true});

            await Axios.put(consts.api_urls.edit_adviser + id,
                adviser_object,
                {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },

            }).then(function (response) {
                commit('del_adviser',id);

                // set loading true
                //commit('stop_loading',null,{root:true});

                if (response.data.result) {
                    commit('notfound_error','ویرایش شد');
                }

            }).catch(function (error) {
                commit('notfound_error','ویرایش نشد');
            });
        },
        create: async ({commit},{adviser_object})=>{
            await Axios.put(consts.api_urls.add_adviser,
                adviser_object,
                {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('user.token')
                },

            }).then(function (response) {
                commit('add_adviser',adviser_object);

                // set loading true
                //commit('stop_loading',null,{root:true});

                if (response.data.result) {
                    commit('notfound_error','افزوده شد');
                }

            }).catch(function (error) {
                commit('notfound_error','افزوده نشد');
                console.log('error');
            });
        }
    }
}
import consts from "../../consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        contacts: [],
    },
    getters: {
        contacts: state => {
            return state.contacts
        }
    },
    mutations: {
        set_contacts(state, contacts) {
            state.contacts = contacts;
        },
        del_contact(state,id){
            state.contacts=state.contacts.filter(item => item.id !== id);
        },
        notfound_error(state,error){
            alert(error);
        }
    },
    actions: {
        fetchAllContacts: ({ commit }) => {

            commit("start_loading", { root: true });

            Axios.get(consts.api_urls.get_contacts, {
                headers: {
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {
                commit('set_contacts',response.data);
                commit("stop_loading", { root: true });
            }).catch(function (error) {
                commit("stop_loading", { root: true });
            });

        },
        delete: ({commit},id)=>{

            // set loading true
            commit('start_loading',{root:true});

            Axios.delete(consts.api_urls.remove_contacts+id, {
                headers: {
                    'Authorization':localStorage.getItem('user.token')
                },
            }).then(function (response) {

                commit('start_loading',{root:true});

                commit('del_contact',id);

                if (response.data.result) {
                    commit('notfound_error','حدف شد');
                }

            }).catch(function (error) {
                commit('stop_loading',{root:true});
                commit('notfound_error','خطا در سیستم');
            });
        }
    }
}
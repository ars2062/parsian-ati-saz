import consts from "../../consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        contacts: [],
        isLoading:true
    },
    getters: {
        contacts: state => {
            return state.contacts
        },
        loading:state=>{
            return state.isLoading;
        }
    },
    mutations: {
        set_contacts(state, contacts) {
            state.contacts = contacts;
        },
        del_contact(state,id){
            state.contacts=state.contacts.filter(item => item.id !== id);
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
        fetchAllContacts: ({ commit }) => {
            Axios.get(consts.api_url+'contact', {
                headers: {
                    'Authorization':consts.auth_header
                },
            }).then(function (response) {
                commit('stop_loading');
                commit('set_contacts',response.data);
            }).catch(function (error) {
                commit('stop_loading');
            });

        },
        delete: ({commit},id)=>{

            // set loading true
            commit('start_loading');

            Axios.delete(consts.api_url+'contact/'+id, {
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
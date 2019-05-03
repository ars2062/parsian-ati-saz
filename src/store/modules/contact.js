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
            state.contacts=contacts.filter(item => item.id !== id);
        },
        stop_loading(state){
            state.isLoading=false;
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
                
            });

        },
        delete: ({commit},id)=>{
            Axios.delete(consts.api_url+'contact/'+id, {
                headers: {
                    'Authorization':consts.auth_header
                },
            }).then(function (response) {
                alert(id);
                commit('del_contact',id);
            }).catch(function (error) {
                alert(error);
            });
        }
    }
}
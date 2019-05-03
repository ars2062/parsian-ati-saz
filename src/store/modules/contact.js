import consts from "../../consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        loading: false,
        contacts: []
    },
    getters: {},
    mutations: {
        setContacts({ state }, contacts) {
            state.contacts = contacts;
        }
    },
    actions: {
        fetchAllContacts: ({ commit }) => {
            Axios.get(consts.api_url+'contact',{
                headers:{
                    Authorization:consts.auth_header
                }
            })
        }
    }
}
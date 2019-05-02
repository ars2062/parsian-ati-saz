
import axios from "axios";
import consts from "../../consts";
import { get, METHODS } from "http";
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
            var xmlHttp = new XMLHttpRequest();

            xmlHttp.open("POST", consts.api_url+'contact', true); // false for synchronous request
            xmlHttp.setRequestHeader("Authorization", consts.auth_header);
            xmlHttp.send(null);
            console.log(xmlHttp.responseText);
        }
    }
}
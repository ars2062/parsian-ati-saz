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
            var xhr = new XMLHttpRequest();
            xhr.open('GET', consts.api_url+'contact', true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.onload = function() {
                var text = xhr.responseText;
                var title = getTitle(text);
                alert('Response from CORS request to ' + url + ': ' + title);
              };
            
              xhr.onerror = function() {
                alert('Woops, there was an error making the request.');
              };

              xhr.send();
            
        }
    }
}
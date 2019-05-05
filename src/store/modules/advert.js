import consts from "../../consts";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        product_adverts: [],
        sell_adverts: [],
        partnership_adverts: [],
        master_adverts: [],
        search_results:[]
    },
    getters: {
        product_adverts: state => {
            return state.product_adverts
        },
        sell_adverts: state => {
            return state.sell_adverts
        },
        partnership_adverts: state => {
            return state.partnership_adverts
        },
        master_adverts: state => {
            return state.master_adverts
        },
        get_search_result : state =>{
            return state.search_results;
        },
        recent: state =>{
            return state.search_results[state.search_results.length -1];
        }
    },
    mutations: {
        set_adverts(state,server_response){
            state.product_adverts = server_response.home_adverts;
            state.master_adverts = server_response.professor_adverts;
            state.sell_adverts = server_response.clutter_sell_adverts;
            state.partnership_adverts = server_response.clutter_partnership_adverts;
        },
        get_advert(state,{type,id}){
            if (type == 1) {
                // is product advert
                return state.product_adverts.find(obj => obj.id == id);
            } else if (type == 2) {
                // is master advert
                return state.master_adverts.find(obj => obj.id == id);
            } else if (type == 3) {
                // is sell advert
                return state.sell_adverts.find(obj => obj.id == id);
            } else{
                // is partnership advert
                return state.partnership_adverts.find(obj => obj.id == id);
            }
        },
        set_search_result(state,res){
            state.search_results = res;
        },

    },
    actions: {
        // tested
        fetch_adverts: ({ commit }) => {
            Axios.get(consts.api_urls.home)
            .then(function (response) {

                commit('stop_loading',{root:true});
                
                commit('set_adverts',response.data);

            }).catch(function (error) {
                commit('stop_loading',{root:true});
            });

        },
        // tested
        search: ({commit},{min_metrazh,max_metrazh,cities=[],advert_type}) => {
            Axios.post(consts.api_urls.search+advert_type,{
                min_metrazh:min_metrazh,
                max_metrazh:max_metrazh,
                cities:cities
            },{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function (response) {

                commit('stop_loading',{root:true});
                
                commit('set_search_result',response.data);

            }).catch(function (error) {
                commit('stop_loading',{root:true});
            });
        }
    }
}
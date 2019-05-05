
import axios from "axios";
import consts from "../../consts";

export default {
    namespaced: true,
    state: {
        isAuth:false,
        loginMsg:'',
        user:{
            token:'',
            phone:''
        }
    },
    getters: {
        login_message: state => {
            return state.loginMsg;
        },
        user_phone: state =>{
            return state.user.phone;
        },
        user_token: state =>{
            return state.user.phone;
        },
        isAuth:state => {
            return state.isAuth;
        }
    },
    mutations: {
        set_loginMsg(state,msg){
            state.loginMsg = msg;
        },
        set_user_phone(state,phone){
            state.user.phone = phone;
            localStorage.setItem('user.phone',phone);
        },
        set_user_token(state,t){
            state.user.token = t;
            localStorage.setItem('user.token',t);
        }
    },
    actions: {
        login: function ({ commit }, phone) {
            axios.post(
                consts.api_urls.login, {
                    'phone': phone
                }, {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            ).then(res => {

                commit('set_loginMsg',res.data.message);

                if (res.data.result) {
                    commit('set_user_phone',phone);
                }

            }).catch(r => {
                
            });
        },
        verify: function ({ commit }, { phone, code }) {
            axios.post(
                consts.api_urls.verify, {
                    phone: phone,
                    code: code
                },
                {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            ).then(res => {
                
                commit('set_loginMsg',res.data.message);

                if (res.data.result) {
                    commit('set_user_token',res.data.token);
                }

            }).catch(r => {
                
            });
        }
    },
}
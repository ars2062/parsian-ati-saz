
import axios from "axios";
import consts from "@/consts";

export default {
    namespaced: true,
    state: {
        isAuth:localStorage.getItem('user.token') ? true:false,
        loginMsg:'',
        loginStatus:'login',
        user:{
            token:localStorage.getItem('user.token') ? localStorage.getItem('user.token') : '',
            phone:localStorage.getItem('user.phone') ? localStorage.getItem('user.phone') : '',
            isAdmin:localStorage.getItem('user.isAdmin') ? localStorage.getItem('user.isAdmin') : false
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
        },
        isAdmin:state=>{
            return state.user.isAdmin;
        },
        user:state => {
            return state.user;
        },
        loginStatus:state =>{
            return state.loginStatus;
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
        },
        set_isAuth: (state,value)=>{
            state.isAuth = value;
        },
        set_isAdmin: (state,value)=>{
            state.user.isAdmin = value;
            localStorage.setItem('user.isAdmin',t);
        },
        set_login_status: (state,value)=>{
            state.loginStatus = value;
        },
        logout:(state)=>{
            state.user.isAdmin = false;
            state.user.phone = null;
            state.user.token = null;

            localStorage.removeItem('user.phone');
            localStorage.removeItem('user.token');
            localStorage.removeItem('user.isAdmin');
        },
        error: state => {
            // set message later
            state.loginMsg = 'خطا در برقراری ارتباط با سرور';
        }
    },
    actions: {
        login: function ({ commit }, phone) {

            commit('start_loading',{root:true});

            axios.post(
                consts.api_urls.login, {
                    'phone': phone
                }, {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            ).then(res => {
                commit('stop_loading',{root:true});

                commit('set_loginMsg',res.data.message);

                if (res.data.result) {
                    commit('set_user_phone',phone);
                    commit('set_login_status','verify')
                } else {
                    commit('error');
                }

            }).catch(error => {
                commit('error');
            });
        },
        verify: function ({ commit }, { phone, code }) {

            commit('start_loading',{root:true});

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
                commit('stop_loading',{root:true});
                commit('set_loginMsg',res.data.message);

                if (res.data.result) {
                    commit('set_user_token',res.data.token);
                    commit('set_isAdmin',res.data.isAdmin);
                }

            }).catch(r => {
                commit('error');
            });
        },
        logout: ({commit}) => {
            axios.post(consts.api_urls.logout,{},{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization' :localStorage.getItem('user.token')
                }
            }).then(response => {
                if (response.data.result) {
                    // clear user data from state and local storage
                    commit('logout');
                } else{
                    commit('error');
                }
            }).error(error =>{
                commit('error');
            });
        }
    },
}
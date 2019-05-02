
import axios from "axios";
import consts from "../../consts";

export default {
    namespaced:true,
    state:{
        loading:false
    },
    getters:{},
    mutations:{},
    actions:{
        login:function({ commit } , {phone}){
            axios.post(
                consts.api_url+'account/login',{
                    phone:phone
                }
            ).then(res => {
                alert(res.data.message);
            }).catch(r => {
                alert('error');
            });
        },
        verify:function ({commit},{phone,code}) {
            axios.post(
                consts.api_url+'account/verify',{
                    phone:phone,
                    code:code
                }
            ).then(res => {
                alert(res.data.message);
                localStorage.setItem('token',res.data.token);
            }).catch(r => {
                alert('error');
            });
        }
    },
}
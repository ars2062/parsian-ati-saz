import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Admin/Index.vue";
import ProductsIndex from "@/views/Admin/Product/Index.vue";
import MastersIndex from "@/views/Admin/Master/Index.vue";
import AdviserIndex from "@/views/Admin/Adviser/Index.vue";
import ContactIndex from "@/views/Admin/Contact/Index.vue";

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path:'/admin',
            component:Index,
            meta:{
                requireAuth:true
            },
            children:[
                {
                    path:'/clutter',
                    component:{
                        created(){
                            alert('scscscscsc');
                        }
                    },
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'/product',
                    component:ProductsIndex,
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'/master',
                    component:MastersIndex,
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'/adviser',
                    component:AdviserIndex,
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'/ads',
                    component:{
                        created(){
                            alert('scscscscsc');
                        }
                    },
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'/contact',
                    component:ContactIndex,
                    meta:{
                        requireAuth:true
                    }
                },
            ]
        },
        
    ]
})

// router.beforeResolve((to, from, next)=>{
//     if (!localStorage.getItem("user")) window.location.href = "/";
//     else next();
// })

export default router;
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
        },
        {
            path:'/admin/clutter',
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
            path:'/admin/product',
            component:ProductsIndex,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/admin/master',
            component:MastersIndex,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/admin/adviser',
            component:AdviserIndex,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/admin/ads',
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
            path:'/admin/contact',
            component:ContactIndex,
            meta:{
                requireAuth:true
            }
        },
    ]
})

// router.beforeResolve((to, from, next)=>{
//     if (!localStorage.getItem("user")) window.location.href = "/";
//     else next();
// })

export default router;
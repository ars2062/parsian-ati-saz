import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Admin/Index.vue";

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
            path:'/admin/products',
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
            path:'/admin/masters',
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
            path:'/admin/advisers',
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
    ]
})

// router.beforeResolve((to, from, next)=>{
//     if (!localStorage.getItem("user")) window.location.href = "/";
//     else next();
// })

export default router;
import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Admin/Index.vue";
import ProductsIndex from "@/views/Admin/Product/Index.vue";
import MastersIndex from "@/views/Admin/Master/Index.vue";
import AdviserIndex from "@/views/Admin/Adviser/Index.vue";
import AdviserList from "@/views/Admin/Adviser/List.vue";
import ContactIndex from "@/views/Admin/Contact/Index.vue";

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            path: '/admin',
            name: 'admin',
            component: Index,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/clutter',
            name: 'clutter',
            component: {
                created() {
                    alert('scscscscsc');
                }
            },
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/product',
            name: 'product',
            component: ProductsIndex,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/master',
            name: 'master',
            component: MastersIndex,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/adviser',
            name: 'adviser',
            component: AdviserIndex,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/advisers',
            name: 'advisers',
            component: AdviserList,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/ads',
            name: 'ads',
            component: {
                created() {
                    alert('scscscscsc');
                }
            },
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/admin/contact',
            name: 'contact',
            component: ContactIndex,
            meta: {
                requireAuth: true
            }
        }
    ]
})

// router.beforeResolve((to, from, next)=>{
//     if (!localStorage.getItem("user")) window.location.href = "/";
//     else next();
// })

export default router;
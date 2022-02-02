import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";

Vue.use(VueRouter)
const routes = [
    {
        path: '',
        component: Home
    },

    {
        path: '/cart',
        component: () => import('../pages/Cart')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
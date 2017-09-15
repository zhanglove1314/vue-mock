import Vue from "vue/dist/vue.js";
import vueRouter from "vue-router";

import index from "./template/index.vue";



let router = new vueRouter({
    routes: [{
        path: "/",
        component: index
    }]

})

Vue.use(vueRouter)

new Vue({
    el: "#app",
    router
})
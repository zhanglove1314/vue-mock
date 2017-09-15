import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import fei from './components/music.vue';
// import other from './components/other.vue';
// import jing from './components/jing.vue';
// import zhibo from './components/zhibo.vue';


var fei = resolve => require.ensure(['./components/music.vue'], () => resolve(require('./components/music.vue')));
var other = resolve => require.ensure(['./components/other.vue'], () => resolve(require('./components/other.vue')));
var jing = resolve => require.ensure(['./components/jing.vue'], () => resolve(require('./components/jing.vue')));
var zhibo = resolve => require.ensure(['./components/zhibo.vue'], () => resolve(require('./components/zhibo.vue')))
    // Vue.use(axios, VueAxios);
let router = new Router({
    linkActiveClass: 'active',
    routes: [{
        name: 'fei',
        path: '/fei',
        redirect: {
            path: '/other'
        },
        component: fei
            // children: [{
            //     name: 'music',
            //     path: '/music',
            //     component: {
            //         template: '<div>1111</div>'
            //     }
            // }]
    }, {
        name: 'other',
        path: '/other',
        component: other
    }, {
        name: 'music',
        path: '/music',
        component: {
            template: '<div>音乐</div>'
        }
    }, {
        name: 'jing',
        path: '/jing',
        component: jing
    }, {
        name: 'zhibo',
        path: '/zhibo',
        component: zhibo
    }, {
        name: 'history',
        path: '/history',
        component: {
            template: '<div>历史</div>'
        }
    }, {
        name: 'qing',
        path: '/qing',
        component: {
            template: '<div>情感生活</div>'
        }
    }]
})
Vue.use(Router, VueAxios, axios);
Vue.prototype.axios = axios;
new Vue({
    el: '#app',
    data: {
        data: ''
    },
    router
    // mounted() {
    //     this.axios.get('/#/fei').then(function(data) {
    //         this.data = data;
    //         console.log(data)
    //     })
    // }
})
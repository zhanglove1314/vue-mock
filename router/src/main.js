import Vue from 'vue';
import Router from 'vue-router';
import fei from './components/music.vue';
import other from './components/other.vue';
import jing from './components/jing.vue';
import zhibo from './components/zhibo.vue';
let router = new Router({
    linkActiveClass: 'active',
    routes: [{
        name: 'fei',
        path: '/fei',
        component: fei,
        children: [{
            name: 'music',
            path: 'music',
            component: {
                template: '<div>1111</div>'
            }
        }]
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
Vue.use(Router);
new Vue({
    el: '#app',
    router
})
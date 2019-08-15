import Vue from 'vue'
import Router from 'vue-router'
import children from '@/components/child'
import test2 from '@/components/test2'
import test1 from '@/views/test1'
import test3 from '@/views/test3'
import test4 from '@/views/test4'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [

        {
            path: '/home',
            name: 'children',
            component: children,
            // children:{
            //     path:'/home/son',
            // }
        },
        {
            path: '/test1',
            name: 'test1',
            component: test1
        },
        {
            path: '/test2',
            name: 'test2',
            component: test2
        },
        {
            path: '/test3',
            name: 'test3',
            component: test3
        },
        {
            path: '/test4',
            name: 'test4',
            component: test4
        }
    ]
})

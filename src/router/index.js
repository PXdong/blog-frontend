import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Error404 from '@/views/error/Error404'
import Layout from '@/views/layout/Layout'

import NewMain from '@/views/new/Main'

Vue.use(Router)

export const constantRouterMap = [

    {
        path: '/user/new',
        redirect: '/user/new/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        },
    },
    {
        path: '/user/social',
        redirect: '/user/social/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-mobile-phone',
            title: '社交圈'
        },
    },
    {
        path: '/user/blog',
        redirect: '/user/blog/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        },
      
    },
    {
        path: '/user/project',
        redirect: '/user/project/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-service',
            title: '开源项目'
        },
  
    },
    {
        path: '/user/helper',
        redirect: '/user/helper/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-printer',
            title: '使用帮助',
            mini: true
        },
    
    },
    {
        path: '/user/readme',
        redirect: '/user/readme/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-document',
            title: 'README.md'
        },

    },
    {
        path: '/user/configure',
        redirect: '/user/configure/main',
        component: Layout,
        meta: {
            type: "user",
            icon: 'el-icon-setting',
            title: '系统配置',
            LoginRequired: true
        },

    },



    {
        path: "/404",
        component: Error404
    },
    {
        path: '/',
        redirect: '/user/new',
    },
    {
        path: "*",
        redirect: "/404"
    },

    //mobile
    {
        path: '/mobile/user/blog',
        redirect: '/mobile/user/blog/main',
        component: MobileLayout,
        meta: {
            type: "mobile",
            icon: 'edit',
            title: '博客'
        },
        children: [
            {
                path: 'main',
                component: MobileBlogMain,
                meta: {
                    scrollTop: true
                }
            },
            {
                path: 'details/:id',
                component: MobileBlogDetails,
                meta: {
                    scrollTop: true
                }
            }
        ]

    },

]




const router = new Router({
    routes: constantRouterMap,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.scrollTop) {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    Vue.prototype.$setTitle(to.meta.title)
    next()
})



export default router
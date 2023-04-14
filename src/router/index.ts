import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const LoginView = import('@/views/LoginView/LoginView.vue')
const AboutView = import('@/views/AboutView/AboutView.vue')
const HomeView = import('@/views/HomeView/HomeView.vue')
const GoodsView = import('@/views/GoodsView/GoodsView.vue')
const UserView = import('@/views/UserView/UserView.vue')
const RoleView = import('@/views/RoleView/RoleView.vue')
const AuthorizeView = import('@/views/AuthorizeView/AuthorizeView.vue')

// 创建路由表
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        redirect: '/goods',
        children: [
            {
                path: '/goods',
                name: 'GoodsView',
                component: GoodsView,
                meta: {
                    isShow: true,
                    title: '商品列表'
                }
            },
            {
                path: '/user',
                name: 'UserView',
                component: UserView,
                meta: {
                    isShow: true,
                    title: '用户列表'
                }
            },
            {
                path: '/role',
                name: 'RoleView',
                component: RoleView,
                meta: {
                    isShow: true,
                    title: '角色列表'
                }
            },
            {
                path: '/authorize',
                name: 'AuthorizeView',
                component: AuthorizeView,
                meta: {
                    isShow: false,
                    title: '授权管理'
                }
            }
        ]
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, form, next) => {
    // 这里准备改为localForage
    const token: string | null = localStorage.getItem('token')
    // 如果token为空并且目标路由不是login，则重新定位到login页面
    if (!token && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
})

export default router
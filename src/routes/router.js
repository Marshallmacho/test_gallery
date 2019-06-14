import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/HomePage.vue'
import store from '../_store/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/cabinet')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next();
        return
    }
    next('/login')
}


//
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: '',
            component: Home,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage'),
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/cabinet',
            name: 'cabinet',
            component: () => import(/* webpackChunkName: "about" */ '../views/CabinetPage'),
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/gallery/:Pid',
            name: 'gallery',
            component: () => import(/* webpackChunkName: "about" */ '../views/GalleryPage'),
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/logout',
            name: 'logout',
            beforeEnter: (to, from, next) => {
                store.dispatch('auth/AUTH_LOGOUT').then(() => next('/login'))
            },
        },
        {
            path: '/404',
            name: '404',
            component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound'),
        }, {
            path: '*',
            redirect: '/404'

        }



    ]
})


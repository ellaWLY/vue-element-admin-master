// 权限管理
import router from './router'
// import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/hasToken'

const whiteList = ['/login', '/auth-redirect'];

router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    const hasToken = getToken() //获取token
    if(hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
        }else{
            console.log('to.path!login')
        }
    }else{
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
        }
    }
})
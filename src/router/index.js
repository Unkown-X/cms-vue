import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue'),
    meta: {
      title: "公安非税管理系统-登录",
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/home.vue'),
    meta: {
      title: "公安非税管理系统-首页",
    }
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to', to)
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  
  next()
})
export default router

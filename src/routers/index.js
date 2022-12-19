import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/HomePage.vue'

// 定義路由表
const routes = [
  {
    path: '/',
    name: '主頁',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/works',
    name: '作品集',
    component: () => import('../views/WorksPage.vue')
  },
  {
    path: '/setting',
    name: '設定',
    component: () => import('../views/SettingPage.vue')
  },
  {
    path: '/changes',
    name: '更新日誌',
    component: () => import('../views/ChangeLog.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ERR 404 找不到頁面ㄛ',
    component: () => import('../views/NotFound.vue')
  }
]

// 執行路由表
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  },
  routes
})

// 將 name 自動賦予至 head 中的 title
router.beforeEach((to, from, next) => {
  document.title = '夏特稀 | ' + to.name
  next()
})

export default router

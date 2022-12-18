import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'

// 引入 Vue I18n
import { createI18n } from 'vue-i18n'
import zh_TW from './i18n/zh_TW'      // 存放中文語系檔
import en_US from './i18n/en_US'      // 存放英文語系檔

// 匯入 font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)


// 建立多國語系
const i18n = new createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "繁體中文",
  fallbackLocale: '繁體中文',
  messages: {
    '繁體中文': zh_TW,
    'English': en_US
  }
});

const app = createApp(App)
app.use(router)

// 自動標題(會從 router 裡面的 title 去抓)
router.afterEach((to, from) => {
  nextTick(() => {
    if (to.name) {
      // 帽似是 to.title
      document.title = to.name
    } else {
      document.title = 'This is Shark NFT'
    }
  })
})

// 載入 font awesome
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.mount('#app')

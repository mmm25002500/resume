<template>
  <div>
    <h1 class="text-3xl inline-block">{{ t('WorkPage.title')}}</h1>
    <button class="text-3xl float-right" @click="toggleNavbar()" :id="navbarOpen? 'hide': 'show'">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>

    <hr class="pb-5">

    <!-- 搜尋框 -->
    <!-- 離開動畫動不了，可看：https://greensock.com/forums/topic/21938-vue-jump-bug-with-gsap-v3/ -->
    <transition-group
      appear
      @before-enter="(el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(-30px)'
      }"
      @enter="(el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1
        })
      }"
      @leave="(el) => {
        gsap.to(el, {
          opacity: 0,
          y: -30,
          duration: 1,
        })
      }"
      >
      <form class="mb-5 " v-if="navbarOpen">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">搜尋</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input ref="search_bar" v-model="cacheSearch" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="搜尋專案吧" required>
        </div>
      </form>
    </transition-group>

    <!-- 作品卡片 -->
    <div class="grid grid-cols-1 gap-4">
      <transition-group
        appear
        @before-enter="(el) => {
          el.style.opacity = 0
          el.style.transform = 'translateY(30px)'
        }"
        @enter="(el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: el.dataset.index * 0.2
          })
        }">
        <span v-for="(item, key) in searchData" :key="key" :data-index="key">
          <Card
            :intro="item.intro"
            :description="item.description"
            :code="item.code"
            :link="item.link"
            :func="item.func"
            :img1="item.img1"
            :img2="item.img2"
          />
        </span>
        </transition-group>
      </div>
  </div>
</template>
<script>
import Card from '@/components/WorksCard.vue'
import { useI18n } from 'vue-i18n'
import GSAP from 'gsap'

export default {
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
  components: {
    Card
  },
  data() {
    return {
      navbarOpen: false,
      cacheSearch: '',
      gsap: GSAP,
      searchData: [],
      data: [
        {
          intro: 'Cutespirit Discord Bot',
          description: '一個由靈萌團隊製作的 DISCORD 機器人，具有各種功能集合，在聊天時更能化解尷尬，將伺服器管理變得更容易。使用模組化進行開發，具有指令幫助功能，讓下指令變得更簡單、更直覺。擁抱開源，熱愛程式。',
          code: 'https://github.com/Cutespirit-Team/CutespiritDiscordBot',
          link: 'https://dcbot.tershi.com',
          func: [
            '使用 Python 開發',
            '可查找 ArchLinux 套件',
            '可開啟客服單',
            '可以在語音頻道撥放 YouTube 音樂',
            '可以在靈萌商店下單/購買商品和查看訂單',
            '可以快速對伺服器/頻道控制',
            '可以使用 Github 服務',
            '可以查看股票'
          ],
          img1: 'assets/images/SideProjects/CutespiritDiscordBot1.webp',
          img2: ''
        },
        {
          intro: 'InMind',
          description: '用慣了 Facebook 和 Instagram 嗎？想找點樂子嗎？那麼 InMind 是您的最佳選擇！我們是全球最大的交友網站，我們提供使用者交際、學習、玩樂...等等的一個好平台。連動靈萌其他服務，將其他社交網站也連動起來。還想使用 Facebook 和 Instagram？我們也提供其他社交平台作為連動帳號，您可以使用其他平台的帳號來登入 InMind。',
          code: 'https://github.com/Cutespirit-Team/InMind',
          link: 'https://inmind.tershi.com',
          func: [
            '功能一',
            '功能二',
            '功能三'
          ],
          img1: 'assets/images/img.webp',
          img2: 'assets/images/img.webp'
        },
        {
          intro: '全國高中生告白網站',
          description: '作品二描述',
          code: 'https://github.com/Cutespirit-Team/saylove',
          link: 'https://github.com/Cutespirit-Team/saylove',
          func: [
            '功能一',
            '功能二',
            '功能三'
          ],
          img1: 'assets/images/img.webp',
          img2: 'assets/images/img.webp'
        },
        {
          intro: '中科大課表查詢',
          description: '作品三描述',
          code: 'https://github.com/mmm25002500/Nutc-class-timetable',
          link: 'https://nutc.tershi.com',
          func: [
            '功能一',
            '功能二',
            '功能三'
          ],
          img1: 'assets/images/img.webp',
          img2: 'assets/images/img.webp'
        }
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
      // document.getElementById('default-search').focus()
      // if (this.navbarOpen) {
      //   this.$refs.search_bar.focus()
      //   console.log(this.$refs)
      // }
    }
  },
  watch: {
    cacheSearch() {
      this.searchData = this.data.filter((item) => {
        if (String(item.intro).toUpperCase().includes(this.cacheSearch.toUpperCase())) {
          return item.intro.toUpperCase().includes(this.cacheSearch.toUpperCase())
        } else if (String(item.description).toUpperCase().includes(this.cacheSearch.toUpperCase())) {
          return item.description.toUpperCase().includes(this.cacheSearch.toUpperCase())
        } else {
          return false
        }
      })
    }
  },
  created() {
    this.searchData = this.data
  },
  mounted() {
    // when page is loaded
    this.$Progress.finish()
  }
}
</script>

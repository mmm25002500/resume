<template>
  <div>
    <h1 class="text-3xl inline-block">{{ t('WorkPage.title')}}</h1>
    <button class="text-3xl float-right" @click="navbarOpen = !navbarOpen">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>

    <hr class="pb-5">

    <!-- 搜尋框 -->
    <form v-if="navbarOpen" class="mb-5">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">搜尋</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <!-- <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="搜尋專案吧" required>
        <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
      </div>
    </form>

    <!-- 作品卡片 -->
    <div class="grid grid-cols-3 gap-4">
      <Card
        v-for="(item, key) in data"
        :key="key"
        :intro="item.intro"
        :description="item.description"
        :link="item.link"
        :func="item.func"
        :img1="item.img1"
        :img2="item.img2"
      />
    </div>
  </div>
</template>
<script>
import Card from '@/components/WorksCard.vue'
import { useI18n } from 'vue-i18n'

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
      data: [
        {
          intro: 'Cutespirit Discord Bot',
          description: '一個由靈萌團隊製作的 DISCORD 機器人，具有各種功能集合，在聊天時更能化解尷尬，將伺服器管理變得更容易。使用模組化進行開發，具有指令幫助功能，讓下指令變得更簡單、更直覺。擁抱開源，熱愛程式。',
          link: 'https://tershi.com',
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
          intro: '全國高中生告白網站',
          description: '作品二描述',
          link: 'https://tershi.com',
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
          link: 'https://tershi.com',
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
  }
}
</script>

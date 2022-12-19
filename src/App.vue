<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
    <!-- navbar -->
    <nav>
      <!-- left router link -->
      <div class="inline-block" v-for="(item, key) in nav_router" :key="key">
        <router-link
          :to="item.path">
          {{ t(`Navbar.${item.name}`) }}
        </router-link>
        <p class="inline" v-if="key != nav_router.length - 1">｜</p>
      </div>

      <!-- right outside link -->
      <div class="inline absolute right-0">
        <div class="relative right-10">

          <div v-for="(item, key) in nav_link" :key="key" class="inline">
            <a :href="item.path" target="_blank">
              <font-awesome-icon :icon="item.icon" />
            </a>
            <p class="inline">　</p>
          </div>

          <!-- toggle dark mode & light mode -->
          <div class="inline">
            <button @click="toggleDarkMode()">
              <font-awesome-icon :icon="darkMode? ['fas', 'moon']: ['fas', 'sun']" />
            </button>
            <p class="inline">　</p>
          </div>

          <!-- toggle dark mode & light mode -->
          <!-- <font-awesome-icon :icon="['fas', 'earth-asia']" /> -->
          <select v-model="locale" class="hidden sm:inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="(item, key) in lang.availableLocales"
              :key="key"
              class="text-gray-500">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </nav>

    <!-- view -->
    <section class="mt-5">
      <router-view></router-view>
    </section>

    <!-- Footer Copyright -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import SITECFG from './config/SITECFG.json'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  },
  setup() {
    const { t, locale } = useI18n()
    const lang = useI18n()
    return {
      t,
      locale,
      lang
    }
  },
  data() {
    return {
      SITE_CONFIG: SITECFG,
      darkMode: false,
      nav_router: [
        {
          name: 'HomePage',
          path: '/'
        },
        {
          name: 'Works',
          path: '/works'
        },
        {
          name: 'Settings',
          path: '/setting'
        }
      ],
      nav_link: [
        {
          name: '夏特稀網站',
          path: 'https://tershi.com',
          icon: ['fas', 'house']
        },
        {
          name: '夏特稀部落格',
          path: 'https://blog.tershi.com',
          icon: ['fas', 'pen-to-square']
        },
        {
          name: '聯絡夏特稀',
          path: 'https://www.tershi.com/about/contact',
          icon: ['fas', 'comment-dots']
        }
      ]
    }
  },
  methods: {

    // 切換 dark mode & light mode
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
    }
  },
  watch: {
    darkMode: function(val) {
      if (val) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    locale: function(val) {
      localStorage.setItem('locale', val)
    }
  },
  created() {
    if (localStorage.darkMode === 'true') {
      this.darkMode = true
    } else {
      this.darkMode = false
    }
  }
}
</script>

<style>

nav {
  font-size: 14px;
  display: inline-block;
}

</style>

<template>
  <!-- background = body -->
  <div class="h-full sm:h-screen m-0 p-0 bg-white dark:bg-gray-900 transition-colors duration-100">
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
            <a v-for="(item, key) in nav_link" :key="key" :href="item.path">
              <font-awesome-icon :icon="item.icon" />
              <p class="inline">　</p>
            </a>

            <!-- toggle dark mode & light mode -->
            <button @click="toggleDarkMode()">
              <font-awesome-icon :icon="darkMode? ['fas', 'moon']: ['fas', 'sun']" />
            </button>
          </div>
        </div>
      </nav>

      <!-- view -->
      <div class="mt-5">
        <router-view></router-view>
      </div>

      <!-- Footer Copyright -->
      <Footer :sitename="SITE_CONFIG.SITE_NAME"></Footer>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import SITECFG from './config/SITECFG.json'
import { useI18n } from "vue-i18n"

export default {
  name: 'App',
  components: {
    Footer
  },
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale,
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
    toggleDarkMode(){
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
    }
  },
  watch: {
    darkMode: function (val) {
      if (val) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
    locale: function (val) {
      localStorage.setItem('locale', val)
    }
  },
  created() {
    this.darkMode = localStorage.darkMode
  },
}
</script>

<style>

nav {
  font-size: 14px;
  display: inline-block;
}

</style>

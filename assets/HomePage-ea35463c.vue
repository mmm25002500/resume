<template>
  <div>
    <!-- 簡介、自介、圖片 -->
      <div class="grid grid-cols-3 gap-4 pb-5">

        <!-- 圖片 -->
        <transition
          appear
          @before-enter="(el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(30px)'
          }"
          @enter="(el) => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1
            })
          }">
          <div class="col-span-full md:col-span-1 pointer-events-none">
            <img src="@/assets/images/img.webp" class="rounded-3xl" alt="">
          </div>
        </transition>

          <!-- 個人簡介的地方 -->
          <transition
            appear
            @before-enter="(el) => {
              el.style.opacity = 0
              el.style.transform = 'translateX(100px)'
            }"
            @enter="(el) => {
              gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1
              })
            }"
          >
            <div class="col-span-full md:col-span-2">
              <h1 class="text-4xl inline">{{ t('HomePage.name') }} {{ t('HomePage.id') }}</h1>
              <p class="inline text-sm text-gray-400 pl-1"> {{ t('HomePage.short') }}</p>
              <p class="pt-2">{{ t('HomePage.description') }}</p>
              <div class="pt-4">
                <span class="pr-3">
                  <a :href="SITE_CONFIG.social.facebook" target="_blank">
                    <font-awesome-icon class="text-xl" :icon="['fab', 'facebook']" />
                  </a>
                </span>
                <span class="pr-3">
                  <a :href="SITE_CONFIG.social.github" target="_blank">
                    <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
                  </a>
                </span>
                <span class="pr-3">
                  <a :href="SITE_CONFIG.social.instagram" target="_blank">
                    <font-awesome-icon class="text-xl" :icon="['fab', 'instagram']" />
                  </a>
                </span>
                <span class="pr-3">
                  <a :href="SITE_CONFIG.social.twitter" target="_blank">
                    <font-awesome-icon class="text-xl" :icon="['fab', 'twitter']" />
                  </a>
                </span>
              </div>

              <!-- position -->
              <div class="pt-4">
                <p>
                  <font-awesome-icon class="text-xl align-middle pr-2 w-5" :icon="['fas', 'code']" />
                  {{ t('HomePage.info.position') }}
                  <font-awesome-icon class="text-xl align-middle pl-2 w-5" :icon="['fas', 'code']" />
                </p>
              </div>

              <!-- mail -->
              <div class="pt-1">
                <a :href="`mailto:`+SITE_CONFIG.info.email">
                  <font-awesome-icon class="text-xl align-middle pr-2 w-5" :icon="['fas', 'envelope']" />
                  {{ SITE_CONFIG.info.email }}
                </a>
              </div>

              <!-- location -->
              <div class="pt-1">
                <p>
                  <font-awesome-icon class="text-xl align-middle pr-2 w-5" :icon="['fas', 'location-dot']" />
                  {{ t('HomePage.info.location') }}
                </p>
              </div>

            </div>
          </transition>
        </div>

      <!-- 技能 Skill -->
      <transition
        appear
        @before-enter="(el) => {
          el.style.opacity = 0
          el.style.transform = 'translateX(-10px)'
        }"
        @enter="(el) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 1
          })
        }"
      >
        <h2 class="text-3xl">{{ t('HomePage.skill.title')}}</h2>
      </transition>
      <transition
        appear
        @before-enter="(el) => {
          el.style.opacity = 0
          el.style.transform = 'translateY(100px)'
        }"
        @enter="(el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1
          })
        }"
      >
        <div class="grid grid-cols-3 gap-4 pt-3 pb-6">
          <div class="col-span-full sm:col-span-1">
            <hr class="pb-5">
            <h3 class="text-3xl text-cyan-300">{{ t('HomePage.skill.frontend.title')}}</h3>
            <ul class="list-disc list-inside pl-5">
              <li v-for="(item, key) in messages[locale].HomePage.skill.frontend.value" :key="key">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-span-full sm:col-span-1">
            <hr class="pb-5">
            <h3 class="text-3xl text-cyan-300">{{ t('HomePage.skill.backend.title')}}</h3>
            <ul class="list-disc list-inside pl-5">
              <!-- {{ t('HomePage.skill.frontend') }} -->
              <!-- {{ lang.messages._value.English.HomePage.skill }} -->
              <!-- {{ Object.keys(lang.messages._value.English) }} -->
              <li v-for="(item, key) in messages[locale].HomePage.skill.backend.value" :key="key">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-span-full sm:col-span-1">
            <hr class="pb-5">
            <h3 class="text-3xl text-cyan-300">{{ t('HomePage.skill.others.title')}}</h3>
            <ul class="list-disc list-inside pl-5">
              <li v-for="(item, key) in messages[locale].HomePage.skill.others.value" :key="key">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </transition>

    <!-- <h2 class="text-3xl">學歷 Education</h2>
    <div class="grid grid-cols-3 gap-4 pt-3 pb-6">
      <div class="col-span-3">
        單欄
      </div>
    </div> -->

    <!-- <div class="grid grid-cols-3 gap-4 pt-3">
      <div class="col-span-3">
        單欄
      </div>
      <div class="col-span-full sm:col-span-1">
        作品
      </div>
      <div class="col-span-full sm:col-span-1">
        作品
      </div>
      <div class="col-span-full sm:col-span-1">
        作品
      </div>
    </div> -->

    <!-- <br>
    <h2 class="inline">正在開發中...</h2>
    <h3 class="text-cyan-500 inline">前往<a href="https://tershi.com">夏特稀網站</a></h3> -->
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import SITECFG from '@/config/SITECFG.json'
import GSAP from 'gsap'

export default {
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
      gsap: GSAP,
      messages: this.lang.messages
    }
  },
  methods: {

  },
  mounted() {
    // when page is loaded
    this.$Progress.finish()
  }
}
</script>

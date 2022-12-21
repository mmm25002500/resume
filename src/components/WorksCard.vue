<template>
  <div class="col-span-full sm:col-span-1 relative">

    <!-- Title -->
    <h2 class="text-2xl font-bold text-emerald-400 inline">
      {{ intro }}
      <a :href="code" class="text-xl text-cyan-400 dark:text-cyan-300 inline hover:underline">
        &lt;Code&gt;
      </a>
    </h2>

    <!-- content -->
    <ul class="list-disc list-inside pl-5">
      <li
        v-for="(item, key) in func"
        :key="key">
        {{ item }}
      </li>
    </ul>

    <!-- description -->
    <p class="text-gray-700 pt-3 dark:text-gray-300">
      {{ description }}
    </p>

    <!-- Link -->
    <a :href="link" target="_blank" class="absolute right-0 bottom-0">
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        {{ t('WorkPage.link') }}
      </button>
    </a>
  </div>

  <!-- img1 -->
  <div class="col-span-full " v-if="img1" :class="img2 ? 'sm:col-span-1' : 'sm:col-span-2'">
    <img :src="getImageUrl(img1)" alt="">
  </div>

  <!-- img2 -->
  <div class="col-span-full " v-if="img2" :class="img1 ? 'sm:col-span-1' : 'sm:col-span-2'">
    <img :src="getImageUrl(img2)" alt="">
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
  props: {
    intro: {
      type: String,
      required: true
    },
    img1: {
      type: String,
      required: false
    },
    img2: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    func: {
      type: Array,
      required: false
    },
    code: {
      type: String,
      required: false
    }
  },
  methods: {
    getImageUrl(name) {
      if (name.startsWith('http')) {
        return name
      } else {
        return new URL(`../${name}`, import.meta.url).href
      }
    }
  }
}
</script>

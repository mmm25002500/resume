<template>
  <div class="col-span-full sm:col-span-1">
    <h2 class="text-2xl font-bold text-emerald-400 inline">
      {{ intro }}
      <a :href="link" class="text-xl text-cyan-400 dark:text-cyan-300 inline hover:underline">
        &lt;Code&gt;
      </a>
    </h2>
    <ul class="list-disc list-inside pl-5">
      <li
        v-for="(item, key) in func"
        :key="key">
        {{ item }}
      </li>
    </ul>
    <p class="text-gray-700 pt-3 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
  <div class="col-span-full " v-if="img1" :class="img2 ? 'sm:col-span-1' : 'sm:col-span-2'">
    <img :src="getImageUrl(img1)" alt="">
  </div>
  <div class="col-span-full " v-if="img2" :class="img1 ? 'sm:col-span-1' : 'sm:col-span-2'">
    <img :src="getImageUrl(img2)" alt="">
  </div>
</template>
<script>
export default {
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

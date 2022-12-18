<template>
  <div>
    <nav>
      <select v-model="locale" class="bg-red-500">
        <option v-for="(item, key) in lang.availableLocales"
          :key="key"
          class="text-black">
          {{ item }}
        </option>
      </select>
    </nav>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n"

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
    }
  },
  methods: {
  },
  computed: {
    // languages() {
    //   return Object.keys(this.lang);
    // }
}
}
</script>
<style>

</style>

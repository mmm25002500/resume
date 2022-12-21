<template>
  <div>
    <h1 class="text-3xl pb-2">{{ t('Settings.ChangeLog.title')}}</h1>
    <hr class="pb-3">
    <ul v-for="(item, key) in log" :key="key" class="list-disc list-inside pb-5">
      {{ item.version }}
      <li v-for="(item2, key2) in item.content" :key="key2">
        {{ item2 }}
      </li>
    </ul>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import log from '@/config/changeLog.json'

export default {
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
  data() {
    return {
      log
    }
  },
  mounted() {
    // when page is loaded
    this.$Progress.finish()
  }
}
</script>

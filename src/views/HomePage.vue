<template>
  <h1><font-awesome-icon :icon="['fas', 'briefcase']" />夏特稀履歷表</h1>

  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-full md:col-span-1">圖片</div>
    <div class="col-span-full md:col-span-2">個人簡介的地方</div>
    <div class="col-span-full sm:col-span-1">技能一</div>
    <div class="col-span-full sm:col-span-1">技能二</div>
    <div class="col-span-full sm:col-span-1">技能三</div>
    <div class="col-span-3">單欄</div>
    <div class="col-span-3">單欄</div>
    <div class="col-span-3">單欄</div>
    <div class="col-span-3">單欄</div>
    <div class="col-span-3">單欄</div>
    <div class="col-span-full sm:col-span-1">作品</div>
    <div class="col-span-full sm:col-span-1">作品</div>
    <div class="col-span-full sm:col-span-1">作品</div>
  </div>
  <h2>正在開發中...</h2>
  <h3 class="text-cyan-500">前往<a href="https://tershi.com">夏特稀網站</a></h3>
</template>

<script>
import { useI18n } from "vue-i18n"
export default {
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  },
}
</script>

<style scoped>

</style>

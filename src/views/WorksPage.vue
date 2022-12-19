<template>
  <div>
    <h1 class="text-3xl">{{ t('WorkPage.title')}}</h1>
    <hr class="pb-5">

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
      data: [
        {
          intro: '作品一介紹',
          description: '作品一描述',
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
          intro: '作品二介紹',
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
          intro: '作品三介紹',
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
<style>

</style>

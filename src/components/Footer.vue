<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <br>
    <hr>
    <p class="text-black dark:text-white text-center font-bold">
      &copy; {{ t('Footer.sitename') }} 2022
    </p>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
}
</script>
<style>

</style>

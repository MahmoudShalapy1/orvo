<template>
  <div :dir="currentLanguageDir">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components : {
    Header,
  },
  computed: {
    currentLanguageDir() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr';
    }
  },
}
</script>

<style scoped></style>
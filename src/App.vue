<template>
  <div dir="rtl" lang="ar">
    <HeaderMain />
    <RouterView />
  </div>
</template>

<script>

import HeaderMain from "./components/HeaderMain.vue";
import HeaderOne from "./components/HeaderOne.vue";

export default {
  components: {
    HeaderMain,
    HeaderOne,
  },
  computed: {
  }
};
</script>

<style scoped></style>

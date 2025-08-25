<template>
  <div dir="rtl" lang="ar">
    <HeaderOne />
    <HeaderMain />
    <HeaderThree />
    <RouterView />
  </div>
</template>

<script>

import HeaderMain from "./components/HeaderMain.vue";
import HeaderOne from "./components/HeaderOne.vue";
import HeaderThree from "./components/HeaderThree.vue";

export default {
  components: {
    HeaderMain,
    HeaderOne,
    HeaderThree,
  },
  computed: {
  }
};
</script>

<style scoped></style>

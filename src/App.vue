<template>
  <div id="app" class="outer">
    <HeaderPart />
    <router-view />
    <FooterPart />
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "./components/Footer";
import Pagination from "./components/Pagination";

export default {
  name: "App",
  components: {
    HeaderPart,
    FooterPart,
    Pagination,
  },
  mounted() {
    this.$store.dispatch("getBaseCategoryList");
  },
};
</script>

<style>
</style>

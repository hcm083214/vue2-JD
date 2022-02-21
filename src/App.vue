<template>
  <div id="app" class="outer">
    <HeaderPart />
    <router-view />
    <FooterPart />
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import Home from "@/pages/Home";
import FooterPart from "./components/Footer";

export default {
  name: 'App',
  components: {
   HeaderPart, Home,FooterPart
  },
  mounted(){
    this.$store.dispatch('getBaseCategoryList');
  }
}
</script>

<style>

</style>

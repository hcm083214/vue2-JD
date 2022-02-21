import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "./route";
import "@/mockServer";
import "swiper/css/swiper.min.css";

import Carousel from "@/components/Carousel";
import TypeNav from "@/components/TypeNav";
Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name, TypeNav)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  store,
  router
}).$mount('#app')

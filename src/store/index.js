import Vue from "vue";
import Vuex from "vuex";

import homeStore from "./home";
import searchStore from "./search";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        homeStore,
        searchStore
    }
})
export default store;
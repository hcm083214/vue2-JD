import { getBaseCategoryListApi, getBannerListApi, getRecommendListApi, getRankListApi, getLikeListApi, getFloorListApi, getBrandListApi } from "@/api/home.js";
const state = {
    categoryList: [],
    bannerList: [],
    recommendList: {},
    rankList: [],
    likeList: [],
    floorList: [],
    brandList: [],
};

const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    RECOMMNEDLIST(state, recommendList) {
        state.recommendList = recommendList;
    },
    RANKLIST(state, rankList) {
        state.rankList = rankList;
    },
    LIKELIST(state, likeList) {
        state.likeList = likeList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
    BRANDLIST(state, brandList) {
        state.brandList = brandList;
    }
};

const actions = {
    async getBaseCategoryList({ commit }) {
        const result = await getBaseCategoryListApi();
        result.code == 200 && (commit('GETCATEGORYLIST', result.data))
    },
    async getBannerList({ commit }) {
        const result = await getBannerListApi();
        result.code == 200 && (commit('BANNERLIST', result.data))
    },
    async getRecommendList({ commit }) {
        const result = await getRecommendListApi();
        result.code == 200 && (commit('RECOMMNEDLIST', result.data))
    },
    async getRankList({ commit }) {
        const result = await getRankListApi();
        result.code == 200 && (commit('RANKLIST', result.data))
    },
    async getLikeList({ commit }) {
        const result = await getLikeListApi();
        result.code == 200 && (commit('LIKELIST', result.data))
    },
    async getFloorList({ commit }) {
        const result = await getFloorListApi();
        result.code == 200 && (commit('FLOORLIST', result.data))
    },
    async getBrandList({commit}){
        const result = await getBrandListApi();
        result.code == 200 && (commit('BRANDLIST', result.data))
    }
}
const homeStore = {
    state,
    mutations,
    actions
}

export default homeStore;
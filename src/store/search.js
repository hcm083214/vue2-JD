import { getSearchListApi } from "@/api/search";

const state = {
    searchList: {
        goodsList: [],
        attrsList: [],
        trademarkList: [],
        pageNo:1,
        totalPages:0,
        total:0,
        pageSize:0,
    }
};
const getters={
    goodsList:state=>state.searchList.goodsList,
    attrsList:state=>state.searchList.attrsList,
    trademarkList:state=>state.searchList.trademarkList,
    total:state=>state.searchList.total,
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        Object.assign(state.searchList,searchList)
    }
};
const actions = {
    async getSearchList({ commit }, goodsParams) {
        const result = await getSearchListApi(goodsParams);
        console.log("🚀 ~ file: search.js ~ line 24 ~ getSearchList ~ result", result)
        result.code ==200 &&(commit('GETSEARCHLIST',result.data));
    },
};
const searchStore = {
    state,
    getters,
    mutations,
    actions
}
export default searchStore;
import {request,mockRequest} from "./ajax";

// 首页三级分类
// 请求地址：/api/product/getBaseCategoryList
export async function getBaseCategoryListApi() {
   return await request.get('/product/getBaseCategoryList')
}

// 轮播图图片
// 请求地址： /mock/banner/getBannerList
export async function getBannerListApi(){
   return await mockRequest.get('/banner/getBannerList')
}

// 今日推荐
// 请求地址： /mock/recommend/getRecommendList
export async function getRecommendListApi(){
   return await mockRequest.get('/recommend/getRecommendList')
}

// 排行榜
// 请求地址： /mock/rank/getRankList
export async function getRankListApi(){
   return await mockRequest.get('/rank/getRankList')
}

// 猜你喜欢
// 请求地址： /mock/like/getLikeList
export async function getLikeListApi(){
   return await mockRequest.get('/like/getLikeList')
}

// 推荐楼层
// 请求地址： /mock/floor/getFloorList
export async function getFloorListApi(){
   return await mockRequest.get('/floor/getFloorList')
}

// 商标
// 请求地址： /mock/brand/getBrandList
export async function getBrandListApi(){
   return await mockRequest.get('/brand/getBrandList')
}
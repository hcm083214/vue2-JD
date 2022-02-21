import banner from "././Home/banner.json";
import recommend from "./Home/recommend.json";
import rank from "./Home/rank.js";
import like from "./Home/like.js";
import floor from "././Home/floor.json";
import brand from "./Home/brand.js";


import Mock from "mockjs";

Mock.mock('/mock/banner/getBannerList','get',{code:200,data:banner});
Mock.mock('/mock/recommend/getRecommendList','get',{code:200,data:recommend});
Mock.mock('/mock/rank/getRankList','get',{code:200,data:rank});
Mock.mock('/mock/like/getLikeList','get',{code:200,data:like});
Mock.mock('/mock/floor/getFloorList','get',{code:200,data:floor});
Mock.mock('/mock/brand/getBrandList','get',{code:200,data:brand});

import { request } from "./ajax";

// 商品搜索
// 请求地址：/api/list
export async function getSearchListApi(params) {
    return await request({
        method: 'post',
        url: '/list',
        data: params
    });
}

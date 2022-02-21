import axios from "axios";

const ENV = process.env.NODE_ENV;
const baseURL = ENV === "development" ? '/api' : '/';

export const request = axios.create({
    baseURL,
    timeout: 2000,
})
request.interceptors.response.use(response=>{
    return response.data
},error=>{
    
});

export const mockRequest = axios.create({
    baseURL:'/mock',
    timeout:2000,
})
mockRequest.interceptors.response.use(response=>{
    return response.data
},error=>{
    
});
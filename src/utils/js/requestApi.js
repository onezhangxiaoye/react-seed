import axios from 'axios'
import querystring from 'querystring';

/**
 * 使用自定义配置新建一个 axios 实例
 * http://192.168.1.238:8123/
 * http://www.zhangxiaoye.top:8123/
 * 
 */
var _axios = axios.create({
    baseURL: "http://192.168.1.158:8123/",
    timeout:1000,
    // headers: {'content-type': 'multipart/form-data'}
    // headers: {'content-type': 'application/x-www-form-urlencoded'}
});

  /** 封装的 axios post 请求
   * 
   * @param {String} url  请求路径
   * @param {Object} params  请求参数
   */
export function axiosPost(url, params) {
    return new Promise((resolve, reject) => {
        _axios.post(url,objToFormData(params))
        .then(result => {
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
    })

}

/**把对象类型数据 转化为 FormData 用于异步请求
 * 
 * @param {Object} params 传入一个对象类型的数据 
 */
function objToFormData(params) {
    let formData = new FormData();
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            console.log(key);
            formData.append(key,params[key]);
        }
    }
    return formData;
}
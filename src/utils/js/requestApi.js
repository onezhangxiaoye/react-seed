import axios from 'axios'
import querystring from 'querystring';

/**
 * 使用自定义配置新建一个 axios 实例
 * http://192.168.1.238:8088/
 * 
 * 
 */
var _axios = axios.create({
    baseURL: " http://www.zhangxiaoye.top:8123/",
    timeout:1000,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  });

  /** 封装的 axios post 请求
   * 
   * @param {String} url  请求路径
   * @param {Object} params  请求参数
   */
export function axiosPost(url, params) {
    return new Promise((resolve, reject) => {
        _axios.post(url,querystring.stringify(params))
        .then(result => {
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
    })

}
import axios from 'axios'
//引入基础数据参数
import baseData from './baseData';
//全局加载状态
import loading from '../components/loading/loading';
//全体提示内容
import toast from '../components/toast/toast';

/**
 * 使用自定义配置新建一个 axios 实例
 */
var _axios = axios.create({
    baseURL: baseData.baseURL,
    timeout: baseData.timeout,
    // headers: {'content-type': 'multipart/form-data'}
    // headers: {'content-type': 'application/x-www-form-urlencoded'}
});

  /** 封装的 axios post 请求
   * 
   * @param {String} url  请求路径
   * @param {Object} params  请求参数
   * @param {Boolean} check  是否需要检测用户信息 默认需要检查
   */
export function axiosPost(url, params, check = true) {
    return new Promise((resolve, reject) => {
        const userInfo = localStorage.getItem('userInfo');
        if (check && (userInfo !== null && userInfo !== '' && JSON.parse(userInfo).accessLevel > 5)){
            toast.show('无访问权限');
            reject({message:'无访问权限'});
        } else {
            console.log('请求值---', url, params);

            _axios.post(url,objToFormData(params))
                .then(result => {
    
                console.log('响应值---', result);
                    
                resolve(result.data);
            }).catch(error => {
                console.log(error);
                loading.hide();
                toast.show('请求超时');
                reject(error);
            })
        }
    })
}

/**
 * 使用自定义配置新建一个 axios 实例
 */
var _axiosGet = axios.create({
    baseURL: baseData.baseURL,
    timeout: baseData.timeout
});

  /** 封装的 axios post 请求
   * 
   * @param {String} url  请求路径
   * @param {Object} params  请求参数
   * @param {Boolean} check  是否需要检测用户信息 默认需要检查
   */
export function axiosGet(url) {
    return new Promise((resolve, reject) => {
        // 为给定 ID 的 user 创建请求
        axios.get(url)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
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
            formData.append(key,params[key]);
        }
    }
    return formData;
}

/**
 * 使用自定义配置新建一个 axiosTest 实例
 */
var axiosTest = axios.create({
    // headers: {'content-type': 'multipart/form-data'}
    headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    // headers: {'content-type': 'application/x-www-form-urlencoded'}
});

  /** 封装的 axios post 请求
   * 
   * @param {String} url  请求路径
   * @param {Object} params  请求参数
   */
  export function axiosPostTest(url, params = {}) {
    return new Promise((resolve, reject) => {
        axiosTest.post(url,params)
        .then(result => {
            resolve(result.data);
        }).catch(error => {
            loading.hide();
            toast.show('请求超时');
            reject(error);
        })
    })
}
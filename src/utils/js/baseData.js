/**
 * 基础参数配置
 */

export default {
        //基础请求路径
        baseURL: 'http://192.168.137.202:8123/',
        // baseURL: 'http://www.zhangxiaoye.top:8123/',
        
        //请求超时时间
        timeout: 1000,

        //用于验证 文件后缀 参数
        imgPostfix: ['.jpg', '.png', '.gif', '.jpeg'],

        //请求图片的网络 路径
        //      http://192.168.1.158:9000/img/
        //      http://www.zhangxiaoye.top:9000/img/imgData/'
        imgPath:'http://www.zhangxiaoye.top:9000/img/imgData/',
        // imgPath:'http://192.168.1.158:9000/img/',
}
/**
 * 基础参数配置
 */

export default {
        //基础请求路径
        baseURL: getIP(),
        // baseURL: 'http://www.zhangxiaoye.top:8123/',
        
        //请求超时时间
        timeout: 60000,

        //用于验证 文件后缀 参数
        imgPostfix: ['.jpg', '.png', '.gif', '.jpeg'],

        //请求图片的网络 路径
        //      http://192.168.1.158:9000/img/
        //      http://www.zhangxiaoye.top:9000/img/imgData/'
        // imgPath:'http://www.zhangxiaoye.top:9000/img/imgData/',
        imgPath:'http://45.40.196.53:9000/img/imgData/',
        // imgPath:'http://192.168.1.158:9000/img/',
}
function getIP() {
        return 'http://' + window.location.hostname + ':8123';
}
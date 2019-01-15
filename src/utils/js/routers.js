
import App from '../../components/App';
import Index from '../../components/Index';
import Content from '../../components/Content';
import Gallery from '../../components/Gallery';
import Test from '../../components/Test';
import Test1 from '../../components/Test1';
import DataList from '../../components/DataList';
import Test3 from '../../components/Test3';
import ImgDataList from '../../components/ImgDataList';
import AddImgData from '../../components/AddImgData';

/**
 * 基础路由参数配置
 */

export default {
    routers: [
        {
            path: "/",
            component: Index,
            anmation:false
        },
        {
            path: "/app",
            component: App,
            anmation:false,
            routers: [
                {
                    path: "/app/content",
                    component: Content,
                    anmation:true
                },
                {
                    path: "/app/gallery",
                    component: Gallery,
                    anmation:true
                },
                {
                    path: "/app/test",
                    component: Test,
                    anmation:true
                },
                {
                    path: "/app/test1",
                    component: Test1,
                    anmation:true
                },
                {
                    path: "/app/dataList",
                    component: DataList,
                    anmation:true
                },
                {
                    path: "/app/test3",
                    component: Test3,
                    anmation:true
                },
                {
                    path: "/app/imgDataList",
                    component: ImgDataList,
                    anmation:true
                },
                {
                    path: "/app/addImgData",
                    component: AddImgData,
                    anmation:true
                },
            ]
        }
    ]
}

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
            component: Index
        },
        {
            path: "/app",
            component: App,
            routes: [
                {
                    path: "/app/content",
                    component: Content
                },
                {
                    path: "/app/gallery",
                    component: Gallery
                },
                {
                    path: "/app/test",
                    component: Test
                },
                {
                    path: "/app/test1",
                    component: Test1
                },
                {
                    path: "/app/dataList",
                    component: DataList
                },
                {
                    path: "/app/test3",
                    component: Test3
                },
                {
                    path: "/app/imgDataList",
                    component: ImgDataList
                },
                {
                    path: "/app/addImgData",
                    component: AddImgData
                },
            ]
        }
    ]
}
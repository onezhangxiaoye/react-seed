
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
import System from '../../components/System';
import AddUrl from '../../components/AddUrl';
import Counter from '../../components/Counter';
import GlobalRedux from '../../components/GlobalRedux';
import Drag from '../../components/Drag';

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
                    path: "/app/test/gallery",
                    component: Gallery,
                    anmation:true
                },
                {
                    path: "/app/test",
                    component: Content,
                    anmation:true
                },
                {
                    path: "/app/test/test1",
                    component: Test1,
                    anmation:true
                },
                {
                    path: "/app/test/dataList",
                    component: DataList,
                    anmation:true
                },
                {
                    path: "/app/test/test3",
                    component: Test3,
                    anmation:true
                },
                {
                    path: "/app/test/imgDataList",
                    component: ImgDataList,
                    anmation:true
                },
                {
                    path: "/app/test/addImgData",
                    component: AddImgData,
                    anmation:true
                },
                {
                    path: "/app/system",
                    component: Content,
                    anmation:true
                },
                {
                    path: "/app/system/addUrl",
                    component: AddUrl,
                    anmation:true
                },
                {
                    path: "/app/test/counter",
                    component: Counter,
                    anmation:true
                },
                {
                    path: "/app/test/globalredux",
                    component: GlobalRedux,
                    anmation:true
                },
                {
                    path: "/app/test/Drag",
                    component: Drag,
                    anmation:true
                },
            ]
        }
    ]
}
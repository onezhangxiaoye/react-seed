
import App from '../../components/App';
import Index from '../../components/Index';
import Content from '../../components/Content';
import Gallery from '../../components/Gallery';
import Test1 from '../../components/Test1';
import DataList from '../../components/DataList';
import Test3 from '../../components/Test3';
import ImgDataList from '../../components/ImgDataList';
import AddImgData from '../../components/AddImgData';
import AddUrl from '../../components/AddUrl';
import Counter from '../../components/Counter';
import GlobalRedux from '../../components/GlobalRedux';
import Drag from '../../components/Drag';

/**
 * 基础路由参数配置
 */
export default [
    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: "/app",
        component: App,
        routers: [
            {
                path: "/app/content",
                exact: true,
                component: Content
            },
            {
                path: "/app/test/gallery",
                component: Gallery
            },
            {
                path: "/app/test",
                exact: true,
                component: Content
            },
            {
                path: "/app/test/test1",
                component: Test1
            },
            {
                path: "/app/test/dataList",
                component: DataList
            },
            {
                path: "/app/test/test3",
                component: Test3
            },
            {
                path: "/app/content/imgDataList",
                component: ImgDataList
            },
            {
                path: "/app/content/addImgData",
                component: AddImgData
            },
            {
                path: "/app/system",
                exact: true,
                component: Content
            },
            {
                path: "/app/system/addUrl",
                component: AddUrl
            },
            {
                path: "/app/test/counter",
                component: Counter
            },
            {
                path: "/app/test/globalredux",
                component: GlobalRedux
            },
            {
                path: "/app/test/Drag",
                component: Drag
            },
        ]
    }
];
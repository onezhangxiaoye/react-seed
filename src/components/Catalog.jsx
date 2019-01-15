/* 左边导航栏组件 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { axiosPost } from '../utils/js/requestApi';

class Catalog extends Component{

    constructor() {
        super();
        this.state = {
            navLinkListData:'',
            navLinkClick:-1
        }
    }

    /**
     * 初始化目录结构栏
     */
    componentWillMount() {

        let navLinkList = []

        this.serverRequest = axiosPost('UrlController/selectAllData').then(result => {
            console.log(result);
            result.data.forEach((iteam, index) => {
                navLinkList.push()
            })
        }) 

        navLinkList = [
            {to:'/app/content',name:'首页',exact:false,click: false,showChild:false},
            {to:'/app/gallery', name: '画廊', exact: true, click: false,showChild:false},
            {to:'/app/test',name:'加密测试',exact:false,click: false,showChild:false},
            {to:'/app/test1',name:'Scroll滚动测试',exact:false,click: false,showChild:false},
            {to:'/app/dataList',name:'请求数据表',exact:false,click: false,showChild:false},
            {to:'/app/test3',name:'全局组件测试',exact:false,click: false,showChild:false},
            {to:'/app/imgDataList',name:'图片数据',exact:false,click: false,showChild:false},
            {to:'/app/addImgData',name:'添加图片数据',exact:false,click: false,showChild:false},
        ]
        this.setState({
            navLinkListData:navLinkList
        })

    }

    catalogUl(props) {
        let arr = [];
        const len = this.state.navLinkListData.length;
        for (let index = 0; index < len; index++) {
            arr.push(
                <div key={'navLinkList' + index}>
                    <li
                        className={props[index].click ? 'chooseCatalog' : ''}
                        onClick={() => this.openCatalogChildUl(index)}
                        style={props[index].click ? {transition:'none'} : {}}
                    >
                        <Link to={props[index].to}>
                            {props[index].name}
                        </Link>
                    </li>
                    <div className={props[index].showChild ? 'li-div li-div2' : 'li-div li-div1'}>
                        { props[index].showChild && this.creatCatalogChildUl()}
                    </div>
                </div>
            );
        } 
        return arr;
    }

    /**
     * 创建下拉栏
     */
    creatCatalogChildUl() {
        return (
            <ul className="li-ul">
                <li>我的</li>
                <li>我的</li>
                <li>我的</li>
            </ul>
        );
    }

    openCatalogChildUl(index) {
        let _index = index*1;
        let navLinkListData = this.state.navLinkListData;
        
        if (this.state.navLinkClick !== -1 && this.state.navLinkClick !== _index) {
            navLinkListData[this.state.navLinkClick].showChild = false;
            navLinkListData[_index].showChild = true;
            navLinkListData[this.state.navLinkClick].click = false;
            navLinkListData[_index].click = true;
        } else if (this.state.navLinkClick === _index) {
            navLinkListData[_index].showChild = false;
            _index = -1;
        } else {
            navLinkListData[_index].showChild = true;
            navLinkListData[_index].click = true;
        }
        
        this.setState({
            navLinkListData: navLinkListData,
            navLinkClick:_index
        })
    }

    render() {
        return (
            <div className="App-catalog">
                <ul className="catalog-ul">
                    {this.catalogUl(this.state.navLinkListData)}
                </ul>
            </div>
        )
    }
}

export default Catalog;
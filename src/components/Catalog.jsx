/* 左边导航栏组件 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { axiosPost } from '../utils/js/requestApi';

import { connect } from 'react-redux'

class Catalog_ extends Component{
    /**
     * 初始化目录结构栏
     */
    componentWillMount() {
        this.props.initData();
    }

    render() {
        const {navList,pathname} = this.props
        return (
            <div className="App-catalog">
                <ul className="catalog-ul">
                    {
                        navList.map((iteam, index) => {
                            return (
                                <div key={'navLinkList_' + index}>
                                    <li
                                        className={pathname === iteam.to ? 'chooseCatalog' : ''}
                                        style={iteam.click ? { transition: 'none' } : {}}
                                    >
                                        <Link to={iteam.to}>
                                            {iteam.name}
                                        </Link>
                                    </li>
                                    <div className=''>
                                        {pathname.indexOf(iteam.to) !== -1 && (<ul className="li-ul">{
                                            iteam.childUl.map((citeam, cindex) => {
                                                return (
                                                    <li
                                                        className={pathname === citeam.to ? 'chooseCatalog' : ''}
                                                        style={citeam.click ? { transition: 'none' } : {}}
                                                        key={'childUl_' + cindex}
                                                    >
                                                        <Link to={citeam.to}>
                                                            {citeam.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }</ul>)}
                                    </div>
                                </div>
                            );
                       }) 
                    }
                </ul>
            </div>
        )
    }
}

/** 对一级导航栏数据进行排序
 * 
 * @param {Array} data 导航栏列表数据
 */
function sortList(data) {
    let nav1 = [];
    data.forEach(iteam => {
        if (iteam.tagFatherId === 0) {
            nav1[iteam.number * 1] = iteam;
        }
    });
    return nav1;
}

/**此处返回的对象 更新为连接的组件的 Props
 * 
 * @param {Object} state redux store 存储的对象
 */
function mapStateToProps(state) {
    const navdata = state.nav.catalog;
    let result = sortList(navdata.nav);
    // 循环一级导航栏数据
    result.forEach((iteam,index) => {
        let childUl = [];
        // 循环数据中的 二级导航栏数据
        navdata.nav.forEach(iteamChildUl => { 
            if (iteam.id === iteamChildUl.tagFatherId) {
                childUl.push(iteamChildUl);
            }
        })
        //为一级导航栏设置子导航栏数据
        result[index].childUl = childUl;
    })
    return {
        navList: result,
        pathname:navdata.pathname,
        initData:initData
    };
  }

  /** 此处用户匹配对应的 action 用于更新 redux store state
   *  初始化导航栏
   */
const initData = () => {
    // 异步请求 导航栏数据
    return {
        type: 'setNav',
        payload:axiosPost('UrlController/selectAllData')
    };
}
  
const Catalog = connect(
    mapStateToProps,
    {
        initData
    }
)(Catalog_)

export default Catalog;
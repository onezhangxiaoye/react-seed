/* 弹出层组件*/
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class XbcRouter_ extends Component{
    render() {
        const {path,urlChange,routers,exact} = this.props
        //当当前路径为首页 或者 状态为登陆时不进行 重定向
        //否则跳转至首页让用户进行登陆
        if (path === '/' || (localStorage.getItem('userInfo') !== null && localStorage.getItem('userInfo') !== '')) {
            //检测当前导航地址的变化
            let pathname = window.location.pathname;
            const _pathname = sessionStorage.getItem('pathname')
            if (pathname !== _pathname) {
                // console.log('----地址变化----', pathname);
                urlChange(pathname);
                sessionStorage.setItem('pathname',pathname)
            }
            console.log('地址变化-------------');
            
            return (
                <Route
                    path={path}
                    exact={exact}
                    render={props => (
                        <this.props.component {...props} routers={routers} />
                    )}
                />
            )
        } else {
            return (
                <Redirect to="/" />
            );
        }
    }
}

/**此处返回的对象 更新为连接的组件的 Props
 * 
 * @param {Object} state redux store 存储的对象
 */
function mapStateToProps() {
    return {
        urlChange:urlChange
    };
  }

const urlChange = (pathname) => {
    return {
        type: 'urlChange',
        payload:pathname
    }
}

const Catalog = connect(
    mapStateToProps,
    {
        urlChange
    }
)(XbcRouter_)


export default Catalog;
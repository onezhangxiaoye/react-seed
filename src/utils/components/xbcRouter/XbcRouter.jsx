/* 弹出层组件*/
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class XbcRouter extends Component{
    render() {
        //当当前路径为首页 或者 状态为登陆时不进行 重定向
        //否则跳转至首页让用户进行登陆
        if (this.props.path === '/' || (localStorage.getItem('userInfo') !== null && localStorage.getItem('userInfo') !== '')) {
            return (
                <Route
                    path={this.props.path}
                    render={props => (
                        <this.props.component {...props} routers={this.props.routers} />
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

export default XbcRouter;
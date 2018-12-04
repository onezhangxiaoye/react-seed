/* 左边导航栏组件 */
import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom'

class Catalog extends Component{
    render() {
        return (
            <div className="App-catalog">
                <HashRouter>
                    <ul>
                        <li>
                            <NavLink exact to="/">画廊</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Content">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Test">测试页面</NavLink>
                        </li>
                    </ul>
                </HashRouter>
            </div>
        )
    }
}

export default Catalog;
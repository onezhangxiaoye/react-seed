/* 左边导航栏组件 */
import React, { Component } from 'react';
// import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Content extends Component{

    render() {
        return (
            <div className="Body-header">
                <img src={logo} className="Body-logo" alt="logo" />
                <p>
                网站建设中。。。。。。。。。
                </p>
            </div>
        )
    }
}

export default Content;
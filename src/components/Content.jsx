/* 左边导航栏组件 */
import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Content extends Component{

    render() {
        return (
            <div className="Body-header">
                <img src={logo} className="move-img" alt="logo" />
                <p>
                网站建设中。。。。。。。。。
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
            </div>
        )
    }
}

export default Content;
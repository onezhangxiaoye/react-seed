/* 头部组件 */
import React, { Component } from 'react';
import header from '../assets/herder.png';

//tips
import Tooltip from '../utils/components/tooltip/tooltip';
import Clock from '../utils/components/clock/Clock'
import history from "../utils/components/xbcRouter/history";

class LoginOut extends Component{
    loginOut(){
        localStorage.setItem('userInfo', '')
        // 路由跳转
        history.replace('/');
    }

    render() {
        return (
            <ul className="my">
                <li>我的</li>
                <li>信息</li>
                <li onClick={() => {this.loginOut()}}>退出</li>
            </ul>
        );
    }
}

class Header extends Component{
    constructor() {
        super();
        this.state = {
            time:''
        }
    }
    componentWillMount() {
        this.getTime();
    }
    componentDidMount() {
        setInterval(() => {
            this.getTime();
        },1000)
    }

    /**
     * 获取当前时间
     */
    getTime() {
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const week = time.getDay();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        // const milliseconds = time.getMilliseconds();
        this.setState({
            time:year + '年' +
            (month + 1) + '月' +
            (date < 10 ? '0'+date : date) + '日  ' +
            (hours < 10 ? '0'+hours : hours) + ':' +
            (minutes < 10 ? '0'+minutes : minutes) + ':' +
            (seconds < 10 ? '0'+seconds : seconds) + '   星期' + this.getWeek(week)
        })
    }

    /**转换周
     * 
     * @param {Number} week 
     */
    getWeek(week) {
        switch (week) {
            case 0:
                return '天';
            case 1:
                return '一';
            case 2:
                return '二';
            case 3:
                return '三';
            case 4:
                return '四';
            case 5:
                return '五';
            case 6:
                return '六';
            default:
                return '错误';
        }
    }

    getUserName() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        return userInfo.name;
    }


    render() {
        return (
            <div className="App-header">
                <div className="portrait">
                    <img src={header} alt="" />
                    <Tooltip position='bottom' content={(<LoginOut></LoginOut>)}>
                        <span>{this.getUserName()}</span>
                    </Tooltip>
                </div>
                <Tooltip position='bottom' content={(<Clock></Clock>)}>
                    <div className="time">{this.state.time}</div>
                </Tooltip>
            </div>
        )
    }
}

export default Header;
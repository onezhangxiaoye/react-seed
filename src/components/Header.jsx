/* 头部组件 */
import React, { Component } from 'react';
import header from '../assets/herder.png';

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


    render() {
        return (
            <div className="App-header">
                <div className="portrait">
                    <img src={header} alt="" />
                    <span>Admin</span>
                </div>
                <div className="time">{this.state.time}</div>
            </div>
        )
    }
}

export default Header;
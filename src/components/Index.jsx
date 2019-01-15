/* 首页组件*/
import React, { Component } from 'react';
import '../styles/index.styl';
import suo from '../assets/suo.png';
import XbcBtn from '../utils/components/xbcBtn/XbcBtn'

import { axiosPost } from '../utils/js/requestApi';
//全局加载状态
import loading from '../utils/components/loading/loading';
//全体提示内容
import toast from '../utils/components/toast/toast';
import history from "../utils/components/xbcRouter/history";

class Index extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            focus:['','']
        }
        this.login = this.login.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    login() {
        let focus = this.state.focus;
        let name = this.state.name;
        if (name === '') {
            toast.show('用户名不能为空');
            focus[0] = 'login-input';
            focus[1] = '';
            this.setState({focus:focus});
            return;
        }
        let password = this.state.password;
        if (password === '') {
            toast.show('密码不能为空');
            focus[0] = '';
            focus[1] = 'login-input';
            this.setState({focus:focus});
            return;
        }
        loading.show();
        this.serverRequest = axiosPost('UserController/selectByUserName', {
            name: name,
            password: password
        }).then(result => {
            loading.hide();
            console.log(result);
            if (result.message === 'success') {
                toast.show('登陆成功');
                localStorage.setItem('userInfo', JSON.stringify({
                    name:result.data.name,
                    password:result.data.password,
                }))
                // 路由跳转
                history.push('/app/content');
            } else {
                localStorage.setItem('userInfo', '')
                toast.show(result.message);
            }
        })
    }

    /**输入框 输入时 时时更新参数
     * 
     * @param {Object} event 
     */
    inputChange(event) {
        let param = {};
        param[event.target.name] = event.target.value;
        param['focus'] = ['', ''];
        this.setState(param);
    }

    render() {
        return (
            <div className="index">
                <p className="title">xiaoBaiCai <span>Login Form</span></p>
                <p className="title-content">The world is a fine place and worth fighting for.</p>
                <div className="index-content">
                    <div className="content-top">
                        <div>
                            <p>Login to our site</p>
                            <p className='notice'>Enter your username and password to log on:</p>
                        </div>
                        <div>
                            <img src={suo} alt=""/>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <input
                            type="text"
                            placeholder="用户名。。。"
                            onChange={this.inputChange}
                            name="name"
                            className={this.state.focus[0]}
                        />
                        <input
                            type="password"
                            placeholder="密码。。。"
                            onChange={this.inputChange}
                            name='password'
                            className={this.state.focus[1]}
                        />
                        <XbcBtn
                            content="登陆"
                            onClick={this.login}
                            style={{width:'90%',letterSpacing:'20px'}}
                        ></XbcBtn>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
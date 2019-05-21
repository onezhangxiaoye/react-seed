/* 左边导航栏组件 */
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//全局加载状态
import loading from '../utils/components/loading/loading';
//全局弹出层
import popup from '../utils/components/popup/Popup';
//全体提示内容
import toast from '../utils/components/toast/toast';
import { axiosPostTest } from '../utils/js/requestApi';
import store from '../utils/store/store';
import XbcBtn from '../utils/components/xbcBtn/XbcBtn'
import { axiosGet } from '../utils/js/requestApi';
import XbcInput from '../utils/components/xbcInput/XbcInput'

import Counter from './Counter';
import GlobalRedux from './GlobalRedux';

import '../styles/test3.styl';

class Test3 extends Component{

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            testValue: 1,
            testText: 1,
            messageLists:[]
        }
        this.requestTest = this.requestTest.bind(this);
        this.testXbcBtn = this.testXbcBtn.bind(this);
        this.loadingTest = this.loadingTest.bind(this);
        this.storeTest = this.storeTest.bind(this);
        this.getStoreTest = this.getStoreTest.bind(this);
        this.testWebSocket = this.testWebSocket.bind(this);
        this.onChange = this.onChange.bind(this);
        this.createWebSocket = this.createWebSocket.bind(this);
    }
    componentDidMount() {
        mySocket = this.createWebSocket();
    }
    createWebSocket() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const url = 'ws://' + window.location.hostname + ':8123/websocket/' + (userInfo === null ? '' : userInfo.id)
        this.setState({
            pushUserId:(userInfo === null ? '' : userInfo.id)
        })
        
        let Socket = new WebSocket(url);
        Socket.onopen = (e) => {
            console.log('连接建立时触发---', e);
        };
        Socket.onmessage = (e) => {
            console.log('客户端接收服务端数据时触发---', e);
            const data = JSON.parse(e.data);
            console.log(data);
            
            if (data.type === 'push') {
                let { messageLists } = this.state;
                messageLists.push(data.data);
                this.setState({
                    messageLists:messageLists
                })
            }
        };
        Socket.onerror = (e) => {
            console.log('通信发生错误时触发---', e);
        };
        Socket.onclose = (e) => {
            Socket = null;
            console.log('连接关闭时触发---', e);
        };
        return Socket;
    }
    requestTest() {
        axiosGet('http://localhost:8123/checkcenter/socket/push').then(result => {
            
        }).catch(res => {
            console.log(res);
            
        })
    }

    testXbcBtn() {
        let testValue = this.state.testValue;

        popup.show(
            <XbcBtn content={'点击弹出弹出层' + this.state.testText+1} onClick={this.requestTest}></XbcBtn>,
            {
                justifyContent: 'flex-end'
            }
        );
        this.setState({
            testValue:++testValue
        });
    }

    loadingTest(i) {
        let testText = this.state.testText;
        
        this.setState({
            testText:++testText
        })
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    storeTest() {
        store.dispatch({ type: 'setNav' ,num:99999});
    }
    getStoreTest() {
        console.log(store.getState().saveData);
    }
    checkBrowser() {
        toast.show('toast测试');
    }
    testWebSocket() {
        console.log('testWebSocket----------');

        const { message, pullUserId,pushUserId } = this.state;
        if (!pullUserId) {
            toast.show('请输入用户id');
            return;
        }
        if (!message) {
            toast.show('请输入要发送得消息');
            return;
        }

        try {
            if (!mySocket || mySocket.readyState !== 1) {
                mySocket = this.createWebSocket();
            }
            const sendMessage = {
                pullUserId:pullUserId,
                pushUserId:pushUserId,
                message:message,
                timestamp:new Date().getTime()
            }
            console.log('sendMessage---',sendMessage);
            
            mySocket.send(JSON.stringify(sendMessage));
            let { messageLists } = this.state;
            messageLists.push(sendMessage);
            this.setState({
                messageLists:messageLists
            })
        } catch (error) {
            console.error(error);
        }
    }
    /**输入框 输入时 时时更新参数
     * 
     * @param {Object} event 
     */
    onChange(event) {
        let param = {};
        param[event.target.name] = event.target.value;
        this.setState(param);
    }

    render() {
        const { messageLists, pushUserId = -1 } = this.state;
        return (
            <div className="test3">
                <XbcBtn
                    content={'点击弹出弹出层' + this.state.testText}
                    onClick={this.testXbcBtn}
                ></XbcBtn>
                <XbcBtn
                    content="测试进入与离开"
                    onClick={this.loadingTest}
                ></XbcBtn>
                <XbcBtn
                    content="设置 STORE 数据"
                    onClick={this.storeTest}
                ></XbcBtn>
                <XbcBtn
                    content="获取 STORE 数据"
                    onClick={this.getStoreTest}
                ></XbcBtn>
                <XbcBtn
                    content="toast测试"
                    onClick={this.checkBrowser}
                ></XbcBtn>
                <XbcBtn
                    content="WebSocket向服务器发送消息实验"
                    onClick={this.testWebSocket}
                ></XbcBtn>
                <XbcBtn
                    content="WebSocket关闭连接"
                    onClick={() => {mySocket.close()}}
                ></XbcBtn>
                <XbcBtn
                    content="WebSocket推送"
                    onClick={this.requestTest}
                ></XbcBtn>
                <Counter></Counter>

                <XbcInput onChange={this.onChange} title="好友id" name="pullUserId" type='number'></XbcInput>
                <XbcInput onChange={this.onChange} title="写消息" name="message"></XbcInput>

                <GlobalRedux></GlobalRedux>

                <ul className="messages-ul">
                    {messageLists.map((iteam, index) => {
                        return (<li key={'messageList_' + index} className={iteam.pushUserId === pushUserId ? 'left-li' : 'right-li'}>{iteam.message}</li>);
                    })}
                </ul>
                
                <div className="move" style={{textAlign:'left'}}></div>
            </div >
        )
    }
}
var mySocket;
export default Test3;
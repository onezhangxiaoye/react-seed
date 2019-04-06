/* 左边导航栏组件 */
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//全局加载状态
import loading from '../utils/components/loading/loading';
//全局弹出层
import popup from '../utils/components/popup/Popup';
//全体提示内容
import componentsContainer from '../utils/components/componentsContainer/componentsContainer';
import { axiosPostTest } from '../utils/js/requestApi';
import store from '../utils/store/store';
import XbcBtn from '../utils/components/xbcBtn/XbcBtn'

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
            items: ['hello', 'world', 'click', 'me']
        }
        this.requestTest = this.requestTest.bind(this);
        this.testXbcBtn = this.testXbcBtn.bind(this);
        this.loadingTest = this.loadingTest.bind(this);
        this.storeTest = this.storeTest.bind(this);
        this.getStoreTest = this.getStoreTest.bind(this);
    }

    requestTest() {
        loading.show();
        this.serverRequest = axiosPostTest(
            'http://192.168.137.202:8080/customer/reports/driverReport/2018',
            "data={phone:'18900000000'}"
        ).then(result => {
            loading.hide();
            console.log(result);
            componentsContainer.toast.show(result.message);
        })
    }

    testXbcBtn() {
        let testValue = this.state.testValue;

        popup.show(
            <XbcBtn content="测试按钮组件" ></XbcBtn>,
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
        componentsContainer.toast.show('toast测试');
        
        
        // var msg=""; 
        // msg += "浏览器名称:" + navigator.appName + "\n";
        // msg += "浏览器版本:" + navigator.appVersion + "\n";
        // msg += "浏览器代码:" + navigator.appCodeName + "\n";
        // alert(msg);
    }

    render() {
        const testli = [
            {content:'a',class:'a'},
            {content:'b',class:'b'},
            {content:'c',class:'c'},
            {content:'d',class:'d'},
            {content:'e',class:'e'},
        ]
        let items = <div key={this.state.testText} className="test-red">{this.state.testText}</div>
        return (
            <div className="test3">
                <XbcBtn
                    content="测试访问数据库"
                    onClick={this.requestTest}
                ></XbcBtn>
                <XbcBtn
                    content="点击弹出弹出层"
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
                <Counter></Counter>
                <GlobalRedux></GlobalRedux>

                <ul>
                    {testli.map((iteam, index) => {
                        return (<li key={iteam.class + '_' + index} className={iteam.class + '_' + index}>{iteam.content}</li>);
                    })}
                </ul>
                
                <div className="move"></div>
                <ReactCSSTransitionGroup
                    component="div"
                    className="react-container"
                    transitionName="example"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                    {items}
                </ReactCSSTransitionGroup>
            </div >
        )
    }
}

export default Test3;
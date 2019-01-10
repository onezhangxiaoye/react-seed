/* 左边导航栏组件 */
import React, { Component } from 'react';
//全局加载状态
import loading from '../utils/components/loading/loading';
//全局加载状态
import popup from '../utils/components/popup/Popup';
//全体提示内容
import toast from '../utils/components/toast/toast';
//tips
// import Tooltip from '../utils/components/tooltip/tooltip';
import { axiosPostTest } from '../utils/js/requestApi';


import XbcBtn from '../utils/components/xbcBtn/XbcBtn'
import XbcLoadingAnimaion from '../utils/components/xbcLoadingAnimaion/XbcLoadingAnimaion';

import '../styles/test3.styl';
import Test5 from './Test5';

class Test3 extends Component{

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            testValue: 1,
            testText:1
        }
        this.requestTest = this.requestTest.bind(this);
        this.testXbcBtn = this.testXbcBtn.bind(this);
        this.loadingTest = this.loadingTest.bind(this);
    }

    requestTest() {
        loading.show();
        this.serverRequest = axiosPostTest(
            'http://192.168.137.202:8080/customer/reports/driverReport/2018',
            "data={phone:'18900000000'}"
        ).then(result => {
            loading.hide();
            console.log(result);
            toast.show(result.message);
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

    loadingTest() {
        let testText = this.state.testText;
        
        console.log(JSON.parse(localStorage.getItem('userInfo')));
        
        
        this.setState({
            testText:++testText
        })
    }

    render() {
        return (
            <XbcLoadingAnimaion xbcKey="test3">
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
                    <Test5 xbcKey={this.state.testText} >
                        <p>{this.state.testText}</p>
                    </Test5>
                </div >
            </XbcLoadingAnimaion>
        )
    }
}

export default Test3;
/* 左边导航栏组件 */
import React, { Component } from 'react';
//全局加载状态
import loading from '../utils/components/loading/loading';
//全局加载状态
import popup from '../utils/components/popup/Popup';
//全体提示内容
import toast from '../utils/components/toast/toast';
//tips
import Tooltip from '../utils/components/tooltip/tooltip';
import { axiosPost } from '../utils/js/requestApi';

import XbcBtn from '../utils/components/xbcBtn/XbcBtn'

import '../styles/test3.styl';
import Test5 from './Test5';



class Test4 extends Component{

    componentDidMount(e) {
        console.log('子组件测试');
        
    }

    render() {
        console.log(this.props.value,'测试测试');
        
        return (<div>{this.props.value}</div>);
    }
}

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
        this.serverRequest = axiosPost('MyController/test', {
            "comment": '白菜'
        }).then(result => {
            loading.hide();
            console.log(result);
            toast.show(result.message);
        })
    }

    testXbcBtn() {
        console.log(12412341241);
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
        this.setState({
            testText:++testText
        })
    }


    render() {
        return (
            <div className="test3">
                <Tooltip title="测试测试">
                    <div>TooltipTooltipTooltipTooltipTooltip</div>
                </Tooltip>
                <XbcBtn
                    content="测试访问数据库"
                    onClick={this.requestTest}
                ></XbcBtn>
                <XbcBtn
                    content="测试按钮组件"
                    onClick={this.testXbcBtn}
                ></XbcBtn>
                <XbcBtn
                    content="测试进入与离开"
                    onClick={this.loadingTest}
                ></XbcBtn>
                <Test4 value={this.state.testValue}></Test4>
                <Test5 xbcKey={this.state.testText} >
                    <p>{this.state.testText}</p>
                </Test5>
            </div>
        )
    }
}

export default Test3;
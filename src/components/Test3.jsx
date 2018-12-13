/* 左边导航栏组件 */
import React, { Component } from 'react';
import loading from '../utils/components/loading/loading';
import toast from '../utils/components/toast/toast';

class Test3 extends Component{

    render() {
        return (
            <div className="test3">
                <button onClick={() => {loading.show()}}>点击增加节点</button>
                <button onClick={() => {loading.hide()}}>点击隐藏节点</button><br/>
                <button onClick={() => {toast.show()}}>点击显示信息提示</button><br/>
            </div>
        )
    }
}

export default Test3;
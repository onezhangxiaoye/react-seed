/* 弹出层组件*/
import React, { Component } from 'react';

import XbcBtn from '../utils/components/xbcBtn/XbcBtn'
import XbcInput from '../utils/components/xbcInput/XbcInput'
import XbcRadio from '../utils/components/xbcInput/XbcRadio'

import '../styles/compileUrl.styl'

class CompileUrl extends Component{

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    componentDidMount() {
        if (this.state === null) {
            this.setState({
                ...this.props.data.param,
                type:this.props.data.type
            })
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

    /**提交新增的导航栏数据 
     * 
     */
    confirm() {
        if (this.props.confirm !== undefined) {
            this.props.confirm(this.state)
        }
    }

    render() {
        const { id = 0, to = '',name = '',tagFatherId,number,hidden} = this.props.data.param;

        let radioarr = [
            {
                title: '显示',
                value: '1',
                checked:hidden === undefined ? true : hidden === 1
            },
            {
                title: '隐藏',
                value: '0',
                checked:hidden === undefined ? false : hidden === 0
            },
        ];

        return (
            <div className="compileurl">
                <div className="compileurl-title">{this.props.title}</div>
                <XbcInput onChange={this.onChange} name="id" type="hidden" value={id}></XbcInput>
                <XbcInput onChange={this.onChange} title="导航路径" name="to" value={to}></XbcInput>
                <XbcInput onChange={this.onChange} title="标签名称" name="name" value={name}></XbcInput>
                <XbcInput onChange={this.onChange} name="tagFatherId" type="hidden" value={tagFatherId}></XbcInput>
                <XbcInput onChange={this.onChange} name="number" type="hidden" value={number}></XbcInput>
                <XbcRadio onChange={this.onChange} title="是否隐藏标签" name="hidden" data={radioarr}></XbcRadio>
                <XbcBtn content="确认" onClick={this.confirm}></XbcBtn>
            </div>
        )
    }
}

export default CompileUrl;
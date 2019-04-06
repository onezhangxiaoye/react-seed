/* 输入框 组件*/
import React, { Component } from 'react';
import './xbcInput.styl';
/**
 * this.props.choose 是否为必填参数
 * this.props.title 输入框title
 * 
 */
class XbcSelect extends Component{
    constructor() {
        super();
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }


    render() {
        let arr = [];
        if (this.props.data !== undefined && this.props.data !== 0) {
            this.props.data.forEach(iteam => {
                arr.push(<option value={iteam.id} >{iteam.name}</option>)
            });
        }
        return (
            <div className="xbc-input">
                <div className="title" >{this.props.choose && (<font>*</font>)}{this.props.title}:</div>
                <div className="input" >
                    <select name={this.props.name} onChange={this.onChange}>
                        { arr }
                    </select>
                </div>
            </div>
        )
    }
}

export default XbcSelect;
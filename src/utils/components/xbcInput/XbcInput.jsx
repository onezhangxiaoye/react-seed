/* 输入框 组件*/
import React, { Component } from 'react';
import './xbcInput.styl';
/**
 * this.props.choose 是否为必填参数
 * this.props.title 输入框title
 * 
 */
class XbcInput extends Component{
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let param = {};
        param[event.target.name] = event.target.value;
        this.setState(param);
        if (this.props.onChange !== undefined) {
            this.props.onChange(event);
        }
    }


    render() {
        const {type,choose,title,placeholder,name,value} = this.props
        return (
            <div className="xbc-input" style={type === 'hidden' ? {display:'none'} : {}}>
                <div className="title" >{choose && (<font>*</font>)}{title}:</div>
                <div className="input" >
                    <input
                        defaultValue={value}
                        placeholder={placeholder}
                        type={type === undefined ? 'text' : type }
                        name={name === undefined ? 'und' : name }
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default XbcInput;
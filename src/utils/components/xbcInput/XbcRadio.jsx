/* 输入框 组件*/
import React, { Component } from 'react';
import './xbcInput.styl';
/**
 * this.props.choose 是否为必填参数
 * this.props.title 输入框title
 * 
 */
class XbcRadio extends Component{
    constructor() {
        super();
        this.state = {
            radio:-1 //默认选择第一个
        }
    }

    onChange(e,index) {
        if (this.props.onChange !== undefined) {
            this.setState({ radio: index });
            this.props.onChange(e);
        }
    }


    render() {
        let arr = [];
        const data = this.props.data
        data.forEach((element, index) => {
            if (element.checked && this.state.radio === -1) {
                this.setState({
                    radio:index
                })
            }
            arr.push(<div key={'redio_' + index}>
                <div className="radio-title">{element.title}</div>
                <input
                    type='radio'
                    name={this.props.name === undefined ? 'und' : this.props.name}
                    value={element.value}
                    onChange={e => {
                        this.onChange(e,index)
                    }}
                    checked={this.state.radio === index}
                />
            </div>)
        })
        return (
            <div className="xbc-radio" style={this.props.type === 'hidden' ? {display:'none'} : {}}>
                <div className="title" >{this.props.choose && (<font>*</font>)}{this.props.title}:</div>
                <div className="input" >
                    {
                        arr
                    }
                </div>
            </div>
        )
    }
}

export default XbcRadio;
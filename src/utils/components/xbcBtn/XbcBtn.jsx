import './xbcBtn.styl';
/* button 组件 */
import React, { Component } from 'react';

class XbcBtn extends Component{
    constructor() {
        super();
        this.state = {
            xbcbtnClass:'xbcbtn'
        }
        this.xbcBtnClick = this.xbcBtnClick.bind(this);
    }

    xbcBtnClick(event, func) {
        // 阻止合成事件间的冒泡
        event.stopPropagation();
        if (func !== undefined) {
            func();
        }
        this.setState({
            xbcbtnClass:'xbcbtn xbcbtn-animation-blue'
        })
        setTimeout(() => {
            this.setState({
                xbcbtnClass:'xbcbtn'
            })
        }, 550);
    }

    render() {

        return (
            <button
                className={this.state.xbcbtnClass}
                style={this.props.style}
                onClick={(event) => { this.xbcBtnClick(event,this.props.onClick) }}
                type="button"
            >
                {this.props.content}
            </button>
        )
    }
}

export default XbcBtn;
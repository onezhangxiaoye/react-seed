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

    xbcBtnClick(event) {
        const { onClick, data } = this.props;
        console.log(data);
        
        // 阻止合成事件间的冒泡
        event.stopPropagation();
        if (onClick !== undefined) {
            onClick(data);
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
                onMouseOver={this.props.onMouseOver}
                onMouseLeave={this.props.onMouseLeave}
                onFocus={this.props.onFocus}
                className={this.state.xbcbtnClass}
                style={this.props.style}
                onClick={this.xbcBtnClick}
                type="button"
            >
                {this.props.content}
            </button>
        )
    }
}

export default XbcBtn;
import './xbcBtn.styl';
/* button 组件 */
import React, { Component } from 'react';

class XbcBtn extends Component{
    constructor() {
        super();
        this.state = {
            xbcbtnClass: 'xbcbtn',
            show:true
        }
        this.xbcBtnClick = this.xbcBtnClick.bind(this);
    }

    xbcBtnClick(event) {
        // 阻止合成事件间的冒泡
        event.stopPropagation();
        this.setState({
            xbcbtnClass:'xbcbtn'
        })
        const { onClick, data } = this.props;
        let strClass = 'xbcbtn';
        switch (this.state.xbcbtnClass) {
            case 'xbcbtn':
                strClass = 'xbcbtn xbcbtn-animation1';
                break;
            case 'xbcbtn xbcbtn-animation1':
                strClass = 'xbcbtn xbcbtn-animation2';
                break;
            case 'xbcbtn xbcbtn-animation2':
                strClass = 'xbcbtn xbcbtn-animation1';
                break;
            default:
                break;
        }
        
        setTimeout(() => {
            this.setState({
                xbcbtnClass:strClass
            })
            if (onClick !== undefined) {
                onClick(data);
            }
        }, 100);
    }

    render() {

        return (
            this.state.show && (<button
                onMouseOver={this.props.onMouseOver}
                onMouseLeave={this.props.onMouseLeave}
                onFocus={this.props.onFocus}
                className={this.state.xbcbtnClass}
                style={this.props.style}
                onClick={this.xbcBtnClick}
                type="button"
            >
                {this.props.content}
            </button>)
        )
    }
}

export default XbcBtn;
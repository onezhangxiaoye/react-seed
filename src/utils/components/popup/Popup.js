/* 弹出层组件*/
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './popup.styl';

class Popup extends Component{
    constructor() {
        super();
        this.state = {
            popupClass:'popup'
        }
        this.close = this.close.bind(this);
    }
    /**
     * 加载完成时执行
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                popupClass:'popup popup-bgcolor'
            })
        }, 100);

    }
    /**
     * 关闭弹窗窗口
     */
    close() {
        this.setState({
            popupClass:'popup'
        })
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div)
        }, 500);
        
    }

    render() {
        return (
            <div style={this.props.style} className={this.state.popupClass} onClick={this.close}>
                {this.props.dom}
            </div>
        )
    }
}

const div = document.createElement('div');

export default {
    show(dom,style = {}) {
        document.body.appendChild(div);
        ReactDOM.render(<Popup style={style} dom={dom}/>, div);
    },
    hide() {
        ReactDOM.unmountComponentAtNode(div)
    }
}
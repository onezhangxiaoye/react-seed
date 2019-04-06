/* 弹出层组件*/
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './popup.styl';

class Popup extends Component{
    constructor() {
        super();
        this.state = {
            popupClass: 'popup',
            popupScale:'popupScale popupScale0'
        }
        this.close = this.close.bind(this);
    }
    /**
     * 加载完成时执行
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                popupClass: 'popup popup-bgcolor',
                popupScale:'popupScale popupScale1'
            })
        }, 100);

    }
    /**
     * 关闭弹窗窗口
     */
    close(e) {
        this.setState({
            popupClass: 'popup',
            popupScale:'popupScale popupScale0'
        })
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div)
        }, 500);
        
    }

    render() {
        return (
            <div style={this.props.style} className={this.state.popupClass} onClick={this.close}>
                <div className={this.state.popupScale} onClick={e => e.stopPropagation()}>
                    {this.props.dom}
                </div>
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
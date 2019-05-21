/* 弹出层组件*/
import React, { Component } from 'react';
import creatComponentsContainer from '../componentsContainer/componentsContainer'

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
    close(e = false) {
        if (this.props.close !== false || e === true) {
            this.setState({
                popupClass: 'popup',
                popupScale:'popupScale popupScale0'
            })
            setTimeout(() => {
                console.log('popup.show-----',popupRef);
                ref.current.clean();
            }, 500);
        }
    }

    render() {
        return (
            <div style={this.props.style} className={this.state.popupClass} onClick={this.close}>
                <div className={this.state.popupScale} onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

let ref;
let popupRef;

export default {
    show(dom, style = {}, close = true,type = 0) {
        ref = creatComponentsContainer('popup-componets' + type);
        popupRef = React.createRef();
        ref.current.add(<Popup style={style} ref={popupRef} close={close}>{dom}</Popup>);
        console.log('popup.show-----',popupRef);
    },
    hide(bool = false) {
        console.log('popup.show-----',popupRef);
        popupRef.current.close(bool);
    },
    popup:Popup
}
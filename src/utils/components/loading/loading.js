import React, { Component } from 'react';
import './loading.styl';
import loading from './loading.png';
import popup from '../popup/Popup'

class Loading extends Component{
    render() {
        return (
            <div className="loading">
                <img src={loading} alt="" />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default {
    show(title = '加载中...') {
        popup.show(<Loading title={title} />, {}, false, 1);
    },
    hide() {
        popup.hide(true)
    }
}
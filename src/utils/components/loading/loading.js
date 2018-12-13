import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './loading.styl';
import loading from './loading.png';

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

const div = document.createElement('div');

export default {
    show() {
        document.body.appendChild(div);
        ReactDOM.render(<Loading title="加载中。。。" />, div);
    },
    hide() {
        ReactDOM.unmountComponentAtNode(div)
    }
}
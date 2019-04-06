/* 点击扩展 组件*/
import React, { Component } from 'react';
import './xbcOpen.styl'

class XbcOpen extends Component{
    constructor() {
        super();
        this.state={
            text:true
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.onClick !== undefined) {
            this.props.onClick(this.props.data,!this.state.text);
            this.setState({
                text:!this.state.text
            })
        }
    }
    render() {
        return (
            <span className="xbcopen" onClick={this.onClick}>
                {this.state.text ? '+' : '-'}
            </span>
        )
    }
}

export default XbcOpen;
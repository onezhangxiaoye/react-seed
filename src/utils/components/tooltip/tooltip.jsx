import React, { Component } from 'react';
import './tooltip.styl';

class Tooltip extends Component{

    constructor() {
        super();
        this.state = {
            show: 'aa'
        };
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver(e) {
        console.log(e);
        
        console.log('鼠标进入');
        
    }

    tip() {
        return (
            <div className="bc-tip" >
                <div>{this.props.title}</div>
                <div></div>
            </div>
        )
    }

    render() {
        return (
            <div className={this.state.show} onMouseOver={this.onMouseOver} >
                {this.tip()}
                {this.props.children}
            </div>
        )
    }
}

export default Tooltip;
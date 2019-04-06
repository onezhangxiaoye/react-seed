/* 弹出层组件*/
import React, { Component } from 'react';
import {  createCanvas} from "./circleLine.js";

class BgCanvas extends Component{

    componentDidMount() {
        createCanvas(this.refs.canvas);
    }
    
    render() {
        return (
            <canvas className="canvas" ref="canvas">
            </canvas>
        )
    }
}

export default BgCanvas;
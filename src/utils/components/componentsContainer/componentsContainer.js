/* 弹出层组件*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComponentsContainer extends Component{

    constructor() {
        super();
        this.state = {
            components:''
        }
    }

    /**添加展示内容
     * 
     * @param {Object} components 需要展示的组件组件
     */
    add(components) {
        this.setState({
            components:components
        })
    }
    /**
     * 清除展示内容
     */
    clean() {
        this.setState({
            components:''
        })
    }

    render() {
        return (<div id="my-componets">
            {this.state.components}
        </div>)
    }
}

let ref;
let div;
/**
 * 
 * @param {Object} ref 组件ref值
 * @param {Object} div dom节点
 */
export default function creatComponentsContainer(id) {
    if (document.getElementById(id) === null) {
        div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        ref = React.createRef();
    }
    ReactDOM.render(<ComponentsContainer ref={ref}></ComponentsContainer>, div);
    return ref;
}
/* 弹出层组件*/
import React, { Component } from 'react';
import Toast from "../toast/toast";
import ReactDOM from 'react-dom';

class ComponentsContainer extends Component{

    constructor() {
        super();
        this.state = {
            toasts:[]
        }
    }

    add(title,toastType) {
        const key = 'toast_' + new Date().getTime();
        let toasts = this.state.toasts;
        toasts.push({
            title:title,
            key:key,
        });
        this.setState({
            toasts:toasts
        })
        setTimeout(() => {
            toasts.forEach((iteam,index) => {
                if (iteam.key = key) {
                    toasts.splice(index, 1);
                }
            })
            this.setState({
                toasts:toasts
            })
        }, 2500);
    }

    render() {
        return (<div id="my-componets">
            {this.state.toasts.map((iteam => {
                return (<Toast title={iteam.title} key={iteam.key}></Toast>);
            }))}
        </div>)
    }
}
let ref;
/**
 * 出初始化组建容器
 */
function creatComponentsContainer() {
    if (document.getElementById('my-componets') === null) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        ref = React.createRef()
        ReactDOM.render(<ComponentsContainer ref={ref}></ComponentsContainer>, div);
    }
}
creatComponentsContainer();

export default {
    toast: {
        show(title,toastType) {
            ref.current.add(title,toastType)
        }
    }
};
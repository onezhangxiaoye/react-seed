import React, { Component } from 'react';
import './toast.styl';
import error from './error.png';
import creatComponentsContainer from '../componentsContainer/componentsContainer'


class Toast extends Component{

    constructor() {
        super();
        this.state = {
            show:'toast'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show:'toast toast-top2'
            })
        }, 200);

        setTimeout(() => {
            this.setState({
                show:'toast'
            })
        }, 2000);
    }

    render() {
        return (
            <span className={this.state.show}>
                <img src={error} alt="" />
                <span>{this.props.title}</span>
            </span>
        )
    }
}

let ref;
let toasts = [];
/**创建提示信息数组 组件 并添加的组件容器组件
 * 
 * @param {Stirng} title 提示标题
 * @param {Number} type 提示状态 0异常/错误
 */
function addToast(title = '未添加title',type = 0) {
    const key = 'toast_' + new Date().getTime();
    toasts.push({
        title:title,
        key:key,
        type:type
    });
    setTimeout(() => {
        toasts.forEach((iteam,index) => {
            if (iteam.key === key) {
                toasts.splice(index, 1);
            }
        })
        ref.current.add(forToasts(toasts));
    }, 2500);
    ref.current.add(forToasts(toasts));
}

/**用户循环创建提示信息数组组件
 * 
 * @param {Arrays} toasts 提示信息数组
 */
function forToasts(toasts) {
    let arr = [];
    toasts.forEach(item => {
        arr.push(<Toast key={item.key} title={item.title} type={item.type}></Toast>);
    })
    return arr;
}
export default {
    show(title, type) {
        ref = creatComponentsContainer('toast-componets');
        addToast(title, type);
    }
};
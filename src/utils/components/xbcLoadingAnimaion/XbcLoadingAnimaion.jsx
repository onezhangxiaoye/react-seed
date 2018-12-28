/* 弹出层组件*/
import React, { Component } from 'react';
import './xbcLoadingAnimaion.styl';

class XbcLoadingAnimaion extends Component{

    constructor() {
        super();
        this.state = {
            //动态修改节点样式
            xbcLoadingAnimaionClass: 'xbcLoadingAnimaion testf-right0',
            //参数
            fprops: '',
            //当前切换动画是否正在执行
            animationing: false,
            //对比参数是否一致的标记
            xbcKey:-1
        }
    }

    /**
     * 延时清除参数 设置参数
     */
    checkClass() {
        if (this.props.xbcKey !== this.state.xbcKey) {
            //延时清除动画
            setTimeout(() => {
                this.setState({
                    xbcLoadingAnimaionClass: 'xbcLoadingAnimaion testf-right0',
                    animationing: false
                })
            }, 1500);
            //延时设置参数
            setTimeout(() => {
                this.setState({
                    fprops: this.props.children,
                    xbcKey:this.props.xbcKey
                })
            }, 700);
        }
    }
    /**
     * 当组件介绍更新时执行
     */
    componentDidUpdate() {
        this.checkClass();
    }

    /**
     * 当页面加载完成后执行 只会执行一次
     */
    componentDidMount() {
        this.checkClass();
    }

    /**当父组件重新render 或者当前组件setState时会触发 此方法·1
     * 
     * @param {Obejct} props  父组件的传递的 新props
     * @param {Obejct} state  子组件的旧 state
     */
    static getDerivedStateFromProps(props, state) {
        //检查父组件传递的 xbcKey 与 当前组件保存的key 是否一致
        //不一致 则执行更新组件
        if (props.xbcKey !== state.xbcKey) {
            //当盘当前动画是否正在执行 正在执行动画时直接更新参数
            if (!state.animationing) {
                //未正在执行时 设置切换动画
                return {
                    xbcLoadingAnimaionClass: 'xbcLoadingAnimaion testf-right0 changeAnimation',
                    animationing: true
                }
            } else {
                return {
                    fprops: props.children,
                    xbcKey:props.xbcKey
                }
            }
        }
        return null;
    }

    render() {
        return (
            <div className={this.state.xbcLoadingAnimaionClass}>
                {this.state.fprops}
            </div>
        )
    }
}

export default XbcLoadingAnimaion;
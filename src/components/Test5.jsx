/* 左边导航栏组件 */
import React, { Component } from 'react';

import '../styles/test5.styl';
class Testf extends Component{

    constructor() {
        super();
        this.state = {
            testfClass: 'testf testf-right0',
            fprops: [],
            //当前切换动画是否正在执行
            animationing: false,
            xbcKey:-1
        }
    }

    checkClass() {
        if (this.props.xbcKey !== this.state.xbcKey) {
            setTimeout(() => {
                this.setState({
                    testfClass: 'testf testf-right0',
                    animationing: false
                })
            }, 1500);
            setTimeout(() => {
                this.setState({
                    fprops: this.props.children,
                    xbcKey:this.props.xbcKey
                })
            }, 700);
        }
    }

    componentDidUpdate() {
        this.checkClass();
    }

    componentDidMount() {
        this.checkClass();
    }

    static getDerivedStateFromProps(props,state) {
        if (props.xbcKey !== state.xbcKey) {
            if (!state.animationing) {
                return {
                    testfClass: 'testf testf-right0 changeAnimation',
                    animationing: true,
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
            <div className={this.state.testfClass} >
                {this.state.fprops}
            </div>
        )
    }
}

export default Testf;
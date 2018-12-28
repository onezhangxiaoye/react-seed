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
            initClass:this.initClass
        }
        this.initClass = this.initClass.bind(this);
    }

    // componentDidMount() {
    //     this.testFunc();
    //     const initClass = this.initClass;
    //     this.setState({
    //         initClass:initClass
    //     })
    // }

    testFunc() {
        console.log('testFunc----testFunc-----------testFunc');
    }

    initClass() {
        console.log('initClass==initClass======initClass');
        let _this = this;
        setTimeout(() => {
            _this.setState({
                testfClass: 'testf testf-right0',
                animationing:false
            })
        }, 1500);
    }


    static getDerivedStateFromProps(props,state) {
        console.log('props修改', props,state);
        // return {
        //     testfClass: 'testf testf-right0 changeAnimation',
        //     animationing: true,
        //     fprops: props.children
        // };

        if (!state.animationing) {
            state.initClass();
            return {
                testfClass: 'testf testf-right0 changeAnimation',
                animationing:true
            }
        } else {
            state.initClass();
            return {
                fprops: props.children
            }
        }

        // if (!this.state.animationing) {
        //     this.setState({
        //         testfClass: 'testf testf-right0 changeAnimation',
        //         animationing:true
        //     })
        //     setTimeout(() => {
        //         this.setState({
        //             fprops: props.children
        //         })
        //         setTimeout(() => {
        //             this.setState({
        //                 testfClass: 'testf testf-right0',
        //                 animationing:false
        //             })
        //         }, 740);
        //     }, 740);
        // } else {
        //     this.setState({
        //         fprops: props.children
        //     })
        // }

        // return null;
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
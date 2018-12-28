/* 弹出层组件*/
import React, { Component } from 'react';
import './xbcLoadingAnimaion.styl';

class XbcLoadingAnimaion extends Component{

    constructor(props) {
        super(props);
        this.state = {
            xbcLoadingAnimaionClass: 'xbcLoadingAnimaion testf-right0',
            fprops: [props.children],
            //当前切换动画是否正在执行
            animationing:false
        }
        console.log(props,'-------');
    }

    componentWillReceiveProps(props) {
        console.log('props修改', props);
        if (!this.state.animationing) {
            this.setState({
                testfClass: 'xbcLoadingAnimaion testf-right0 changeAnimation',
                animationing:true
            })
            setTimeout(() => {
                this.setState({
                    fprops: props.children
                })
                setTimeout(() => {
                    this.setState({
                        testfClass: 'xbcLoadingAnimaion testf-right0',
                        animationing:false
                    })
                }, 740);
            }, 740);
        } else {
            this.setState({
                fprops: props.children
            })
        }
    }

    componentWillUpdate(a,b) {
        console.log('更新更新。。。。。',a,b);
        
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
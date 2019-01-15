/* 弹出层组件*/
import React, { Component } from 'react';
import './tooltip.styl';

class Tip extends Component{
    constructor() {
        super();

        this.tipRef = React.createRef();

        this.state = {
            showClass: 'xbc-tip popupScale0',
            style: { left: 0, top: 0 },
            position:'angle angle-top',
            tipRef:this.tipRef
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    /**
     * 当组件挂载完成  修改class 产生出现的效果
     */
    componentDidMount() {
        
        setTimeout(() => {
            this.setState({
                showClass:'xbc-tip popupScale1'
            })
        }, 100);
    }

    /** 设置tip 的定位位置
     * 
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (state.showClass !== 'xbc-tip popupScale0') {
            //打印 tip节点的 高宽属性
            // console.log(state.tipRef.current.offsetHeight,state.tipRef.current.offsetWidth);
            //根据传入的参数 设置tip 的定位位置
            if (props.position === 'top') {
                return {
                    style: {
                        left: props.style.left + 'px',
                        top: props.style.top - state.tipRef.current.offsetHeight - 10 + 'px'
                    },
                    position:'angle angle-' + props.position
                };
            }else if (props.position === 'bottom') {
                return {
                    style: {
                        left: props.style.left + 'px',
                        top: props.style.top + props.style.height + 10 + 'px'
                    },
                    position:'angle angle-' + props.position
                };
            }else if (props.position === 'left') {
                return {
                    style: {
                        left: props.style.left - state.tipRef.current.offsetWidth - 10 + 'px',
                        top: props.style.top + 'px'
                    },
                    position:'angle angle-' + props.position
                };
            }else if (props.position === 'right') {
                return {
                    style: {
                        left: props.style.left + props.style.width + 10 + 'px',
                        top: props.style.top + 'px'
                    },
                    position:'angle angle-' + props.position
                };
            } else {
                return {
                    style: {
                        left: props.style.left + 'px',
                        top: props.style.top - state.tipRef.current.offsetHeight - 10 + 'px'
                    },
                    position:'angle angle-' + props.position
                };
            }

        }
        return null;
    }

    componentWillUnmount() {
        console.log('销毁-----');
    }

    onMouseEnter() {
        this.props.func(true);
    }

    onMouseLeave() {
        this.props.func(false);
    }

    render() {
        return (
            <div
                onMouseEnter={this.onMouseEnter} 
                onMouseLeave={this.onMouseLeave}
                className={this.state.showClass}
                style={this.state.style}
                ref={this.tipRef}
            >
                <div>{this.props.content}</div>
                <div className={this.state.position}></div>
            </div>
        )
    }
}

export default Tip;
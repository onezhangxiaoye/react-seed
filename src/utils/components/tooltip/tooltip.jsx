import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//引入tip 组件
import Tip from './tip';


const div = document.createElement('div');

class Tooltip extends Component{

    constructor() {
        super();
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.xbcBtnRef = React.createRef();
    }

    /** 为鼠标移入子组件的回调函数
     * 创建tip 节点
     */
    onMouseOver(e) {
        console.log('onMouseOver---');
        //获取 触发此事件的元素（事件的目标节点） 的 相对于页面的定位信息
        const xbcbtn = e.target.getBoundingClientRect();
        this.show(
            {
                left: xbcbtn.left,
                top: xbcbtn.top,
                width:xbcbtn.width,
                height:xbcbtn.height
            },
            this.props.position,
            this.props.content
        );
    }

    /**鼠标移出子组件的回调函数
     * 销毁 tip 节点
     */
    onMouseOut() {
        this.hide();
    }

    /**创建子组件
     * 
     * @param {Object} style 设置tip的绝对定位位置数据
     * @param {String} position 设置tip的绝对定位位置 默认值 顶部显示
     * @param {Object} content tip 显示的内容
     */
    show(style = {},position='top',content = '未传递参数') {
        document.body.appendChild(div);
        ReactDOM.render(<Tip style={style} position={position} content={content}/>, div);
    }
    
    /**
     * 销毁创建的节点
     */
    hide() {
        ReactDOM.unmountComponentAtNode(div)
    }

    render() {

        //克隆传入的children 组件
        //为组件设置需要传入的参数 绑定事件
        let children = React.cloneElement(this.props.children, {
            onMouseOver: this.onMouseOver,
            onMouseOut: this.onMouseOut
        });
        return (
            <>{children}</>
        )
    }
}

export default Tooltip;
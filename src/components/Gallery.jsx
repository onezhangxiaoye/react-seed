/* 左边导航栏组件 */
import React, { Component } from 'react';
import img1 from '../assets/1.png';

class Gallery extends Component{

    constructor() {
        super();
        this.state = {
            imgArr: []
        }
    }

    componentDidMount() {
        this.createImgArr();
    }

    createImgArr() {
        let arr = [];
        let bodyHeader = this.refs.bodyHeader;
        let maxWidth = bodyHeader.clientWidth - 150;
        let maxHeight = bodyHeader.clientHeight - 119;

        for (let index = 0; index < 12; index++) {
            let num = Math.random();
            let bodyHeaderHeight = maxHeight*num;
            num = Math.random();
            let bodyHeaderLeft = maxWidth*num;
            num = Math.random();
            let bodyHeaderTransform = 180 * num - 90;
            let style = {
                left: bodyHeaderLeft + 'px',
                top: bodyHeaderHeight + 'px',
                transform:'rotate(' + bodyHeaderTransform + 'deg)'
            }
            arr.push(<img className="move-img" style={style} src={img1} alt="" key={'img_' + index } />)
        }

        this.setState({
            imgArr:arr
        })
    }

    moveImg() {
        this.createImgArr();
    }

    render() {
        return (
            <div className="Body-header" ref="bodyHeader">
                {this.state.imgArr}
                <div  onClick={() => {this.moveImg()}} className="animation-btn">切换切换切换</div>
            </div>
        )
    }
}

export default Gallery;
/* 头部组件 */
import React, { Component } from 'react';

class Test1 extends Component{

    constructor() {
        super();
        this.state = {
            countNum: 0,
            time:true
        }
        this.myOnScroll = this.myOnScroll.bind(this);
    }
    myOnScroll(event) {
        // console.log(event);
        // console.log(124123);
        // console.log(this.refs.move.offsetTop);
        // console.log(this.refs.move.scrollHeight);
        // console.log(this.refs.move.scrollTop);

        if (this.refs.move.scrollTop >= 352 && this.state.time) {
            let num = 0;
            var countNumInterval = setInterval(() => {
                this.setState({
                    countNum: num += 50,
                    time:false
                })
                if (num >= 10000) {
                    clearInterval(countNumInterval);
                }
            }, 10);   
        }
        
    }

    // componentDidMount() {
    //     let _this = this;
    //     window.addEventListener('scroll', () => {
    //         _this.myOnScroll();
    //     });
    // }

    render() {
        return (
            <div className="test1"  ref='move' onScroll={this.myOnScroll}>
                <h1>12412412</h1>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move"></div>
                <div className="test-move">
                    <h1>{this.state.countNum}</h1>
                </div>
                <div className="test-move"></div>
            </div>
        )
    }
}

export default Test1;
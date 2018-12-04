/* 左边导航栏组件 */
import React, { Component } from 'react';

class Test extends Component{

    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log(11111111111,);
        this.setState({
            inputValue:event.target.value
        })
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        
    }

    render() {
        return (
            <div className="test">
                <h5>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</h5>
                <input type="text"  onChange={this.onChange} ref="testInput"/>
                <h1>{this.state.inputValue}</h1>
            </div>
        )
    }
}

export default Test;
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './toast.styl';
import error from './error.png';

class Toast extends Component{

    constructor() {
        super();
        this.state = {
            show:'toast'
        }
    }


    componentDidMount() {
        // this.setState({
        //     show:'toast toast-top1'
        // })
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
            <div className={this.state.show}>
                <img src={error} alt="" />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

const div = document.createElement('div');

export default {
    show() {
        document.body.appendChild(div);
        ReactDOM.render(<Toast title="异常错误" />, div);

        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div)
        },2200);
    }
}
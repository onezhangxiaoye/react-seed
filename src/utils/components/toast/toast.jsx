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
export default Toast;
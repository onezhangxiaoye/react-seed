/* 弹出层组件*/
import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import './xbcAnimationRouter.styl';

class XbcAnimationRouter extends Component{
    render() {
        return (
            <div className="xbcAnimationRouter">
                <ReactCSSTransitionGroup
                    component="div"
                    className="react-container"
                    transitionName="example"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                {appRouter}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default XbcAnimationRouter;
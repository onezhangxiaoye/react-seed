/* 首页组件*/
import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom'
import history from "../utils/components/xbcRouter/history";
//全局路由配置参数
import _route from '../utils/js/routers';

import XbcRouter from '../utils/components/xbcRouter/XbcRouter';

class Home extends Component{

    render() {
        return (
            <Router history={history}>
                <Switch>
                    {_route.routers.map((route, i) => (
                        <XbcRouter
                            exact={i === 0} 
                            path={route.path}
                            key={i}
                            component={route.component}
                            routers={route.routers}
                            animation={route.animation}
                        />
                    ))}
                </Switch>
            </Router>
        )
    }
}

export default Home;
/* 首页组件*/
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
//全局路由配置参数
import _route from '../utils/js/routers';

// import App from './App';
// import Index from './Index';

class Home extends Component{
    render() {
        return (
            <Router>
                <div>
                    {_route.routers.map((route, i) => (
                        <Route
                            exact={i === 0} 
                            path={route.path}
                            key={i}
                            render={props => (
                                <route.component {...props} routes={route.routes} />)}
                        />
                    ))}
                </div>
            </Router>
        )
    }
}

export default Home;
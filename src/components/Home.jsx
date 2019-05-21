/* 首页组件*/
import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom'
import history from "../utils/components/xbcRouter/history";
//全局路由配置参数
import routers from '../utils/js/routers';
import XbcRouter from '../utils/components/xbcRouter/XbcRouter';
import store from '../utils/store/store';
import { Provider } from 'react-redux'

class Home extends Component{

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        {routers.map((route, i) => (
                            <XbcRouter  key={i} {...route}/>
                        ))}
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Home;
import React, { Component } from 'react';

import '../styles/app.styl';
import '../styles/base.styl';
import Header from './Header';
import Catalog from './Catalog';

import XbcRouter from '../utils/components/xbcRouter/XbcRouter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xbcKey:0
    }
    this.routeChange = this.routeChange.bind(this);
    this.routers = props.routers;
  }

  /**监控子组件参数修改的的方法
   * 
   * @param {Number} e 
   */
  routeChange(e) {
    this.setState({
      xbcKey:e
    })
    
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-body">
          <Catalog routeChange={this.routeChange}></Catalog>
          <div className="body-right">
            {this.routers.map((route, i) => (
              <XbcRouter
                  path={route.path}
                  key={i}
                  component={route.component}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

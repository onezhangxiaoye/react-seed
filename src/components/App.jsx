import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import '../styles/app.styl';
import '../styles/base.styl';
import Header from './Header';
import Catalog from './Catalog';
// import Content from './Content';
// import Gallery from './Gallery';
// import Test from './Test';
// import Test1 from './Test1';
// import DataList from './DataList';
// import Test3 from './Test3';
// import ImgDataList from './ImgDataList';
// import AddImgData from './AddImgData';
import XbcLoadingAnimaion from '../utils/components/xbcLoadingAnimaion/XbcLoadingAnimaion';


class App extends Component {

  constructor({ routes }) {
    super();
    this.state = {
      xbcKey:0
    }
    this.routeChange = this.routeChange.bind(this);
    this.routes = routes;
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
        <Router>
          <div className="App-body">
            <Catalog routeChange={this.routeChange}></Catalog>
            <XbcLoadingAnimaion xbcKey={this.state.xbcKey}>
              {this.routes.map((route, i) => (
                <Route
                  path={route.path}
                  key={i}
                  render={props => (
                      <route.component {...props} routes={route.routes} />)}
                />
              ))}
            </XbcLoadingAnimaion>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

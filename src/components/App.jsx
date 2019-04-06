import React, { Component } from 'react';

import '../styles/app.styl';
import '../styles/base.styl';
import Header from './Header';
import Catalog from './Catalog';
import BgCanvas from '../utils/components/bgCanvas/BgCanvas'

import XbcRouter from '../utils/components/xbcRouter/XbcRouter';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {

  constructor(props) {
    super(props);
    this.routers = props.routers;
  }

  render() {
    const { location } = this.props;
    
    const appRouter = <div key={location.pathname} className="appRouter">
              {this.routers.map((route, i) => (
                  location.pathname === route.path ? <XbcRouter
                  path={route.path}
                  key={i}
                  component={route.component}
                /> : null
              ))}</div>

    return (
      <div className="App">
        <BgCanvas></BgCanvas>
        <Header></Header>
        <Catalog></Catalog>
          <div className="body-right">
            <ReactCSSTransitionGroup
              component="div"
              className="react-container"
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {appRouter}
            </ReactCSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export default App;

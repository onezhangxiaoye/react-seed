import React, { Component } from 'react';

import '../styles/app.styl';
import '../styles/base.styl';
import Header from './Header';
import Catalog from './Catalog';
import BgCanvas from '../utils/components/bgCanvas/BgCanvas'

import XbcRouter from '../utils/components/xbcRouter/XbcRouter';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {

  render() {
    const { location, routers } = this.props;
    const appRouter = <div key={location.pathname} className="appRouter">
              {routers.map((route,i) => (
                <XbcRouter key={i} {...route} />
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
import React, { Component } from 'react';

import '../styles/app.styl';
import '../styles/base.styl';
import Header from './Header';
import Catalog from './Catalog';

import XbcRouter from '../utils/components/xbcRouter/XbcRouter';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {

  constructor(props) {
    super(props);
    this.routers = props.routers;
  }

  render() {
    console.log(this.props);
    
    const { location } = this.props;
    
    const appRouter = <div key={location.pathname} className="appRouter">
              {this.routers.map((route, i) => (
                  <XbcRouter
                  path={route.path}
                  key={i}
                  component={route.component}
                />
              ))}</div>

    return (
      <div className="App">
        <Header></Header>
        <div className="App-body">
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
      </div>
    );
  }
}

export default App;

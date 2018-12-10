import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'

import '../styles/app.styl';
import '../styles/index.styl';
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Content from '../components/Content';
import Gallery from '../components/Gallery';
import Test from '../components/Test';
import Test1 from '../components/Test1';
import DataList from '../components/DataList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-body">
          <Catalog></Catalog>
          <HashRouter>
            <div className="Body">
              <Route exact path="/" component={Gallery} key='Gallery'></Route>
              <Route path="/Content" component={Content} key='Content'></Route>
              <Route path="/Test" component={Test} key='Test'></Route>
              <Route path="/Test1" component={Test1} key='Test1'></Route>
              <Route path="/DataList" component={DataList} key='DataList'></Route>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;

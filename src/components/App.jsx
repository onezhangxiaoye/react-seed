import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'

import '../styles/app.styl';
import '../styles/index.styl';
import Header from './Header';
import Catalog from './Catalog';
import Content from './Content';
import Gallery from './Gallery';
import Test from './Test';
import Test1 from './Test1';
import DataList from './DataList';
import Test3 from './Test3';
import ImgDataList from './ImgDataList';


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
              <Route path="/Test3" component={Test3} key='Test3'></Route>
              <Route path="/ImgDataList" component={ImgDataList} key='ImgDataList'></Route>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;

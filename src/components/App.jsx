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
import AddImgData from './AddImgData';
import XbcLoadingAnimaion from '../utils/components/xbcLoadingAnimaion/XbcLoadingAnimaion';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-body">
          <Catalog></Catalog>
          <HashRouter>
            <XbcLoadingAnimaion>
              <Route exact path="/" component={Content} key='Content'></Route>
              <Route path="/Gallery" component={Gallery} key='Gallery'></Route>
              <Route path="/Test" component={Test} key='Test'></Route>
              <Route path="/Test1" component={Test1} key='Test1'></Route>
              <Route path="/DataList" component={DataList} key='DataList'></Route>
              <Route path="/Test3" component={Test3} key='Test3'></Route>
              <Route path="/ImgDataList" component={ImgDataList} key='ImgDataList'></Route>
              <Route path="/AddImgData" component={AddImgData} key='AddImgData'></Route>
            </XbcLoadingAnimaion>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;

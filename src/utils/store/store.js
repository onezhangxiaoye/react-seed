import { createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';
// 利用redux-logger打印日志
// import { createLogger } from 'redux-logger'
// 安装redux-devtools-extension的可视化工具。
// import { composeWithDevTools } from 'redux-devtools-extension'

// 使用日志打印方法， collapsed让action折叠，看着舒服。
// const loggerMiddleware = createLogger({ collapsed: true });


// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
); 

export default store
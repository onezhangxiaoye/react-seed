import { combineReducers } from 'redux'

import counter from './actions/counter';
import nav from './actions/nav';
import components from './actions/components';


const reducerModules = {
    counter,
    nav,
    components,
};
  
export default combineReducers(reducerModules);
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import HomeReducer from './Home/Home';

const reducer = combineReducers({
  HomeReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

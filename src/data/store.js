import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import combineReducers from './combineReducers';

export const history = createBrowserHistory()

const devtools = process.env.NODE_ENV !== 'production' ? window.devToolsExtension || (() => noop => noop) : () => noop => noop;

const configureStore = (initialState = {}) => {
  return createStore(
    combineReducers(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      ), devtools()),
  );
};

export default configureStore;

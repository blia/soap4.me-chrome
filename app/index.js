import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import createBrowserHistory from 'history/createBrowserHistory';
import { Router, browserHistory } from 'react-router';
// import withScroll from 'scroll-behavior';
import configureStore from './configureStore';
import routes from './routes';

let initialState;
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__;
} else {
  initialState = {};
}

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

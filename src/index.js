import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import reducer from './reducers';
import Home from './components/home/Home';

let store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Redirect from='*' to='/' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('Main')
);

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/App';
import * as reducers from './reducers';
import Search from './components/pages/search/Search';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

let store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

let Bar = () => (
  <div>
    <button onClick={() => browserHistory.goBack()}>Go to /</button>
  </div>
);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
        <Route path="watch" component={Bar}/>
        <Redirect from='*' to='/' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('Main')
);

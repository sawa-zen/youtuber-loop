import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/App';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

let store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

let Foo = () => (
  <div>
    <button onClick={() => browserHistory.push('/bar')}>Go to /foo</button>
  </div>
);
let Bar = () => (
  <div>Bar</div>
);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Foo}/>
        <Route path="bar" component={Bar}/>
        <Redirect from='*' to='/' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('Main')
);

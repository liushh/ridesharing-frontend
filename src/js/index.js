import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import allReducers from './reducers';

import '../scss/main.scss';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

const App = () => (
  <div className="app">
    Hello World!
  </div>
);

export default App;


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

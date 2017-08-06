import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import allReducers from './reducers';
import Authentication from './authentication/auth0-authentication';
import { REDIRECT_URL } from './authentication/constants';

import App from './containers/App';
import LandingPage from './containers/LandingPage';

import '../scss/main.scss';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

const clientId = '84vHiRQ-jsS6ihrAcJoBnRXVJcLBu6nm';
const domain = 'liusha.auth0.com';
const auth = new Authentication(clientId, domain, REDIRECT_URL, localStorage);

const isCurrentPageRoot = () => browserHistory.getCurrentLocation().pathname === '/';

const verifyAuthenticated = () => {
  if (!auth.isLoggedIn()) {
    if (!isCurrentPageRoot()) browserHistory.push('/');
    auth.showLoginDialog();
  }
  return true;
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/auth0_authenticated" />
        <Route path="/" component={App} onEnter={verifyAuthenticated} >
          <Route path="/trips" component={LandingPage} />
        </Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

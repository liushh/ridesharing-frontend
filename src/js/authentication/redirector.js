import { browserHistory } from 'react-router';

export default class Redirector {
  onAuthenticationSucceed() {
    browserHistory.push('/');
  }

  // When users failed to login/signup we want to get them back to
  // Login page so that we can display the message in the login window.
  onAuthenticationFailed() {
    browserHistory.push('/');
  }
}

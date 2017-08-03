/* eslint class-methods-use-this: "off", no-underscore-dangle: "off" */
const Auth0Lock = jest.genMockFromModule('auth0-lock');

let listeners = {};
let isLoginWindowOpen = false;
let flashMessage = {};

class Auth0LockMock extends Auth0Lock.default {
  on(event, callback) {
    listeners[event] = callback;
  }

  show(message) {
    isLoginWindowOpen = true;
    if (message) {
      flashMessage = message;
    }
  }
}

Auth0LockMock.__simulateAuthenticated = token => {
  const callback = listeners.authenticated;
  if (callback) {
    callback({ idToken: token });
  }
};

Auth0LockMock.__simulateAuthenticationFailed = error => {
  const callback = listeners.authorization_error;
  if (callback) {
    callback(error);
  }
};

Auth0LockMock.__reset = () => {
  listeners = {};
  isLoginWindowOpen = false;
  flashMessage = {};
};

Auth0LockMock.__isShowingLoginWindow = () => isLoginWindowOpen;
Auth0LockMock.__flashMessage = () => flashMessage;

module.exports = Auth0LockMock;

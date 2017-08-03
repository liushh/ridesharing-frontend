/* eslint no-underscore-dangle: "off" */
import jwtSimple from 'jwt-simple';
import client from '../../client';
import Auth0Authentication from '../auth0-authentication';
import LocalStorageMock from '../__mocks__/local-storage';

const getExpiredJWT = () => {
  const date = new Date();
  const expiredPayload = {
    iss: 'issuer',
    aud: 'audience',
    exp: date.getTime() / 2000,
    iat: date.getTime() / 1000
  };
  return jwtSimple.encode(expiredPayload, 'JWT_SECRET');
};

const getValidJWT = () => {
  const date = new Date();
  const validPayload = {
    iss: 'issuer',
    aud: 'audience',
    exp: date.getTime() / 500,
    iat: date.getTime() / 1000
  };
  return jwtSimple.encode(validPayload, 'JWT_SECRET');
};

const VALID_JWT = getValidJWT();
const EXPIRED_JWT = getExpiredJWT();

jest.mock('auth0-lock');
jest.mock('../redirector');

describe('Auth0 authentication', () => {
  const Auth0Lock = require('auth0-lock'); // eslint-disable-line global-require

  let auth;

  beforeEach(() => {
    auth = new Auth0Authentication('auth0ClientID', 'domain', 'http://localhost:3000/', new LocalStorageMock());
  });

  afterEach(Auth0Lock.__reset);

  it('should be initialized correctly', () => {
    expect(auth.lock).toBeDefined();
    expect(auth.localStorage).toBeDefined();
  });

  describe('#showLoginDialog', () => {
    it('should show login window without error message', () => {
      expect(Auth0Lock.__isShowingLoginWindow()).toBe(false);

      auth.showLoginDialog();

      expect(Auth0Lock.__isShowingLoginWindow()).toBe(true);
      expect(Auth0Lock.__flashMessage()).toEqual({});
    });

    it('should show login window with error message', () => {
      expect(Auth0Lock.__isShowingLoginWindow()).toBe(false);

      auth.error = {
        error_description: 'Access Denied'
      };
      const expectedFlashMessage = {
        flashMessage: {
          type: 'error',
          text: 'Access Denied'
        }
      };

      auth.showLoginDialog();

      expect(Auth0Lock.__isShowingLoginWindow()).toBe(true);
      expect(Auth0Lock.__flashMessage()).toEqual(expectedFlashMessage);
    });
  });

  describe('#isLoggedIn', () => {
    it('should be logged in after being logged in successfully on Auth0', () => {
      Auth0Lock.__simulateAuthenticated(VALID_JWT);
      expect(auth.isLoggedIn()).toBe(true);
      expect(client.defaults.headers.common.Authorization).toEqual(VALID_JWT);
      expect(auth.redirector.onAuthenticationSucceed).toBeCalled();
    });

    it('should fail authentication and redirect user to login page', () => {
      const error = { error_description: 'Access Denied' };
      Auth0Lock.__simulateAuthenticationFailed(error);
      expect(auth.isLoggedIn()).toBe(false);
      expect(auth.redirector.onAuthenticationFailed).toBeCalled();
    });

    it('should not be logged in if users has not logged in on Auth0', () => {
      expect(auth.isLoggedIn()).toBe(false);
    });

    it('should not be logged in if the token expired', () => {
      Auth0Lock.__simulateAuthenticated(EXPIRED_JWT);
      expect(auth.isLoggedIn()).toBe(false);
    });
  });

  describe('#logout', () => {
    it('should be logged out', () => {
      Auth0Lock.__simulateAuthenticated(VALID_JWT);
      expect(auth.isLoggedIn()).toBe(true);
      expect(client.defaults.headers.common.Authorization).toEqual(VALID_JWT);

      auth.logout();

      expect(auth.isLoggedIn()).toBe(false);
      expect(client.defaults.headers.common.Authorization).toEqual('');
    });

    it('should allow logout twice wihout side-effects', () => {
      Auth0Lock.__simulateAuthenticated(VALID_JWT);
      expect(auth.isLoggedIn()).toBe(true);

      auth.logout();
      auth.logout();

      expect(auth.isLoggedIn()).toBe(false);
    });
  });
});

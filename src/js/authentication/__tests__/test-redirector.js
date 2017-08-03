import { browserHistory } from 'react-router';
import Redirector from '../redirector';

describe('Redirector', () => {
  let redirector;
  let browserHistoryPushMock;

  beforeEach(() => {
    redirector = new Redirector();
    browserHistoryPushMock = jest.fn();
    browserHistory.push = browserHistoryPushMock;
  });

  afterEach(() => {
    browserHistoryPushMock.mockReset();
  });

  it('should push browser history to /bots on authenticated', () => {
    redirector.onAuthenticationSucceed();
    expect(browserHistoryPushMock.mock.calls[0][0]).toEqual('/');
  });

  it('should push browser history to / on authentication failed', () => {
    redirector.onAuthenticationFailed();
    expect(browserHistoryPushMock.mock.calls[0][0]).toEqual('/');
  });
});

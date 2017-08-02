import reducer from '../sample-reducer';

describe('Test sample reducer', () => {
  it('should return the initial empty state', () => {
    const action = {};
    const state = undefined;
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });
});

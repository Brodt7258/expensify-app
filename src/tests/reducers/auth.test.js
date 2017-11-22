import authReducer from '../../reducers/auth';

test('should set the default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = 6969;
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state).toEqual({ uid });
})

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
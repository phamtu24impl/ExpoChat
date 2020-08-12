import type { User, AuthInfo } from '../../types/local'

const types = {
  SET_AUTH_INFO: 'AUTH.SET_AUTH_INFO',
  SET_CURRENT_USER: 'AUTH.SET_CURRENT_USER',
  LOG_OUT: 'LOG_OUT',
}

const setAuthInfo = (authInfo: AuthInfo) => ({
  type: types.SET_AUTH_INFO,
  payload: authInfo,
})

const setCurrentUser = (payload: User) => ({
  type: types.SET_CURRENT_USER,
  payload,
})

const logout = () => ({
  type: types.LOG_OUT,
})

const authActions = {
  types,
  setAuthInfo,
  setCurrentUser,
  logout,
}

export default authActions

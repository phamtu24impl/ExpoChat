import type { User, AuthInfo } from '../../types/local'

const types = {
  SET_AUTH_INFO: 'AUTH.SET_AUTH_INFO',
  SET_CURRENT_USER: 'AUTH.SET_CURRENT_USER',
}

const setAuthInfo = (authInfo: AuthInfo) => ({
  type: types.SET_AUTH_INFO,
  payload: authInfo,
})

const setCurrentUser = (payload: User) => ({
  type: types.SET_CURRENT_USER,
  payload,
})

const authActions = {
  types,
  setAuthInfo,
  setCurrentUser,
}

export default authActions

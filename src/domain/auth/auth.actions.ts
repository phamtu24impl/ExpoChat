import type { User, AuthInfo } from '../../types/local'
import rootActions from '../../redux/root.actions'

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

const logout = () => (dispatch: any) => {
  dispatch({ type: types.LOG_OUT })
  dispatch(rootActions.resetState())
}

const authActions = {
  types,
  setAuthInfo,
  setCurrentUser,
  logout,
}

export default authActions

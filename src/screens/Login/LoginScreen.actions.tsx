import { Alert } from 'react-native'

import createApiHandler from '../../domain/auth/createApiHandler'
import { LoginApi } from '../../api'
import appLoadingActions from '../../components/AppLoading/appLoading.actions'
import authDomain from '../../domain/auth'

const login = (username: string) => async (dispatch: any, getState: any) => {
  dispatch(appLoadingActions.start())
  try {
    const response = await createApiHandler(dispatch, getState)(() => LoginApi.login(username))
    const { _id } = response.data
    dispatch(authDomain.action.setAuthInfo(response.data._id))
    dispatch(authDomain.action.setCurrentUser({ _id, username }))
  } catch (e) {
    // TODO: handle error
    console.log(e.message)
    Alert.alert(e.message, e.message)
  } finally {
    dispatch(appLoadingActions.finish())
  }
}

const actions = {
  login,
}

export default actions

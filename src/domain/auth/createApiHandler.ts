import type { Response } from '../../types/local'
import client from '../../api/client'
import rootActions from '../../redux/root.actions'
import { STATUS_UNAUTHORIZED } from '../../config/constants'

import authSelectors from './auth.selectors'

const createApiHandler = (dispatch: any, getState: any) => async <T>(
  apiCall: () => Promise<Response<T>>
): Promise<Response<T>> => {
  const state = getState()
  const authHeader = authSelectors.getAuthHeader(state)
  client.authHeader = authHeader
  try {
    return await apiCall()
  } catch (e) {
    if (e.response?.status === STATUS_UNAUTHORIZED) {
      dispatch(rootActions.resetState())
    }

    throw e
  }
}

export default createApiHandler

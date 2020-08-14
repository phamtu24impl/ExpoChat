import { Alert } from 'react-native'

import type { Conversation } from '../../types/local'
import createApiHandler from '../auth/createApiHandler'
import { ConversationApi } from '../../api'
import appLoadingActions from '../../components/AppLoading/appLoading.actions'

const types = {
  SET_CONVERSATIONS: 'conversation.SET_CONVERSATIONS',
}

const setConversations = (payload: Conversation[]) => ({
  type: types.SET_CONVERSATIONS,
  payload,
})

const fetchConversations = () => async (dispatch: any, getState: any) => {
  dispatch(appLoadingActions.start())
  try {
    const { data } = await createApiHandler(dispatch, getState)(() => ConversationApi.fetchConversations())
    dispatch(setConversations(data))
  } catch (e) {
    // TODO: handle error
    console.log(e.message)
    Alert.alert(e.message, e.message)
  } finally {
    dispatch(appLoadingActions.finish())
  }
}

const actions = {
  fetchConversations,
  setConversations,
  types,
}

export default actions

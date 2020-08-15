import createApiHandler from '../../domain/auth/createApiHandler'
import { ConversationApi } from '../../api'
import conversationActions from '../../domain/conversations/conversations.actions'
import { Message } from '../../types/local'
import appLoadingActions from '../../components/AppLoading/appLoading.actions'
import screenNames from '../../config/screenNames'
import * as RootNavigation from '../../utils/RootNavigation'
import { Alert } from 'react-native'

const types = {
  IS_CREATED_SUCCESSFULLY: 'IS_CONVERSATION_CREATED_SUCCESSFULLY',
}

const createNewConversation = (username: string) => async (dispatch: any, getState: any) => {
  dispatch(appLoadingActions.start())

  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data } = await handleApi(() => ConversationApi.createNewConversation(username))
    dispatch(conversationActions.setConversations([data]))
    RootNavigation.navigate(screenNames.chatDetail, { conversation: data })
  } catch (err) {
    Alert.alert('No user found')
  } finally {
    dispatch(appLoadingActions.finish())
  }
}

const actions = {
  types,
  createNewConversation,
}

export default actions

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

const fetchConversations = () => async (dispatch: any, getState: any) => {
  dispatch(appLoadingActions.start())
  try {
    const { data } = await createApiHandler(dispatch, getState)(() => ConversationApi.fetchConversations())
    dispatch(conversationActions.setConversations(data))
  } catch (e) {
    // TODO: handle error
    console.log(e.message)
    Alert.alert(e.message, e.message)
  } finally {
    dispatch(appLoadingActions.finish())
  }
}

const createNewConversation = (username: string) => async (dispatch: any, getState: any) => {
  dispatch(appLoadingActions.start())

  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data } = await handleApi(() => ConversationApi.createNewConversation(username))
    dispatch(conversationActions.setConversation(data))
    RootNavigation.navigate(screenNames.chatDetail, { id: data._id })
  } catch (err) {
    Alert.alert('No user found')
  } finally {
    dispatch(appLoadingActions.finish())
  }
}

const actions = {
  types,
  createNewConversation,
  fetchConversations,
}

export default actions

import createApiHandler from '../../domain/auth/createApiHandler'
import { ConversationApi } from '../../api'
import conversationActions from '../../domain/conversations/conversations.actions'
import { Message } from '../../types/local'

const types = {
  FETCH_CONVERSATION: 'FETCH_CONVERSATION',
  FETCH_CONVERSATION_FAIL: 'FETCH_CONVERSATION_FAIL',
  FETCH_CONVERSATION_SUCCESS: 'FETCH_CONVERSATION_SUCCESS',
  SEND_MESSAGE: 'SEND_MESSAGE',
  SEND_MESSAGE_SUCCESS: 'SEND_MESSAGE_SUCCESS',
  SEND_MESSAGE_FAIL: 'SEND_MESSAGE_FAIL'
}

const fetchConversation = (id: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.FETCH_CONVERSATION, payload: id })

  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data } = await handleApi(() => ConversationApi.fetchConversation(id))
    dispatch(conversationActions.setConversations(data))
    dispatch({ type: types.FETCH_CONVERSATION_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: types.SEND_MESSAGE_FAIL, payload: err })
  }
}

const sendMessage = (conversationId: string, message: Message) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.SEND_MESSAGE })

  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data } = await handleApi(() => ConversationApi.createNewMessage(conversationId, message))
    dispatch({ type: types.SEND_MESSAGE_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: types.SEND_MESSAGE_FAIL, payload: err })
  }
}

const actions = {
  types,
  fetchConversation,
  sendMessage,
}

export default actions

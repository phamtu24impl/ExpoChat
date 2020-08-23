import createApiHandler from '../../domain/auth/createApiHandler'
import { ConversationApi } from '../../api'
import conversationActions from '../../domain/conversations/conversations.actions'
import { Message, Conversation } from '../../types/local'

const types = {
  FETCH_CONVERSATION: 'FETCH_CONVERSATION',
}

const fetchConversation = (id: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.FETCH_CONVERSATION, payload: id })
  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data }: { data: Conversation } = await handleApi(() => ConversationApi.fetchConversation(id))
    dispatch(conversationActions.setConversation(data))
  } catch (err) {}
}

const sendMessage = ({ convId, message }: { convId: string; message: Message }) => async (
  dispatch: any,
  getState: any
) => {
  const handleApi = createApiHandler(dispatch, getState)
  try {
    await handleApi(() => ConversationApi.createNewMessage(convId, message))
    dispatch(conversationActions.addNewMessage({ convId: convId, message: message }))
  } catch (err) {}
}

const actions = {
  types,
  fetchConversation,
  sendMessage,
}

export default actions

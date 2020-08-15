import createApiHandler from '../../domain/auth/createApiHandler'
import { ConversationApi } from '../../api'
import conversationActions from '../../domain/conversations/conversations.actions'
import { Message } from '../../types/local'

const fetchConversation = (id: string) => async (dispatch: any, getState: any) => {
  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data } = await handleApi(() => ConversationApi.fetchConversation(id))
    dispatch(conversationActions.setConversations(data))
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
  fetchConversation,
  sendMessage,
}

export default actions

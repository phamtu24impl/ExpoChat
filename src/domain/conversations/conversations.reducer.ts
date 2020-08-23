import produce from 'immer'
import type { Draft } from 'immer'
import lodash from 'lodash'

import type { Conversation } from '../../types/local'

import actions from './conversations.actions'
import conversation from '../../api/conversation'

export type State = {
  conversations: {
    [key: string]: Conversation
  }
}

const initialState: State = {
  conversations: {},
}

const conversationsReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_CONVERSATIONS:
      draftState.conversations = {
        ...draftState.conversations,
        ...lodash.keyBy(action.payload, '_id'),
      }
      break
    case actions.types.SET_CONVERSATION:
      const conversation: Conversation = action.payload
      const id = conversation._id
      draftState.conversations[id] = {
        ...draftState.conversations[id],
        ...conversation,
      }
      break
    case actions.types.ADD_MESSAGE:
      const { convId, message } = action.payload
      draftState.conversations[convId].messages.unshift(message)
      break
  }
}, initialState)

export default conversationsReducer

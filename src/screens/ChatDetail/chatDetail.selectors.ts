import { createSelector } from 'reselect'

import type { Conversation } from '../../types/local'
import type { State as ConversationDomainState } from '../../domain/conversations/conversations.reducer'
import conversationsSelectors from '../../domain/conversations/conversations.selectors'

import type { State } from './chatDetail.reducers'

const chatDetailState = (state: any): State => state.screens.chatDetail
const conversationIdSelector = createSelector(chatDetailState, (state) => state.id)

const conversationSelector = createSelector(
  [conversationsSelectors.conversationsSelector, conversationIdSelector],
  (conversations: any, id: any) => {
    return conversations[id]
  }
)

const chatScreenSelector = {
  conversationSelector,
}

export default chatScreenSelector

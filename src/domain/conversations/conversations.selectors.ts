import { createSelector } from 'reselect'

import type { Message, Conversation } from '../../types/local'

import type { State } from './conversations.reducer'

const getState = (state: any): State => state.conversations

const conversationsSelector = createSelector(getState, (state: State): {} => state.conversations)

export default { conversationsSelector }

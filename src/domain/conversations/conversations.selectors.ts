import { createSelector } from 'reselect'

import type { Message } from '../../types/local'

import type { State } from './conversations.reducer'

const getState = (state: any): State => state.conversations

const conversationsSelector = createSelector(getState, (state: State): {} => state.messages)

export default { conversationsSelector }

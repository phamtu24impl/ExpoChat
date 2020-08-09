import { createSelector } from 'reselect'

import type { Message } from '../../types/local'

import type { State } from './chatScreen.reducer'

const getState = (state: any): State => state.screens.chat

const conversationsSelector = createSelector(getState, (state: State): Message[] => state.conversations)

const chatScreenSelector = {
    conversationsSelector,
}

export default chatScreenSelector

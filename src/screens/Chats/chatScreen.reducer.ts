/**
 * @flow
 */

import produce from 'immer'
import type { Draft } from 'immer'

import type { Message } from '../../types/local'

import actions from './chatScreen.actions'

export type State = {
  conversations: Message[]
}

const initialState: State = {
  conversations: [],
}

const chatScreenReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_MESSAGES:
      draftState.conversations = action.payload
      break
  }
}, initialState)

export default chatScreenReducer

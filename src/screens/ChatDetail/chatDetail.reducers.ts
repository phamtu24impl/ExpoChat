import produce from 'immer'
import type { Draft } from 'immer'

import type { Message } from '../../types/local'

import actions from './chatScreen.actions'

export type State = {
  messages: {
    [key: string]: Message
  }
}

const initialState: State = {
  messages: {},
}

const chatDetailReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_MESSAGES:
      draftState.messages = lodash.keyBy(action.payload, '_id')
      break
  }
}, initialState)

export default chatScreenReducer

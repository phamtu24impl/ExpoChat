import produce from 'immer'
import type { Draft } from 'immer'
import lodash from 'lodash'

import type { Message } from '../../types/local'

import actions from './conversations.actions'

export type State = {
  messages: {
    [key: string]: Message
  }
}

const initialState: State = {
  messages: {},
}

const conversationsReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_CONVERSATIONS:
      draftState.messages = lodash.keyBy(action.payload, '_id')
      console.log(draftState.messages)
      break
  }
}, initialState)

export default conversationsReducer

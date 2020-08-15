import produce from 'immer'
import type { Draft } from 'immer'
import lodash from 'lodash'
import type { Message } from '../../types/local'

import actions from './chatDetail.actions'

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
  }
}, initialState)

export default chatDetailReducer

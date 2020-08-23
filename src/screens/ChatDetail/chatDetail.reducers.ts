import produce from 'immer'
import type { Draft } from 'immer'
import lodash from 'lodash'
import type { Message } from '../../types/local'

import actions from './chatDetail.actions'

export type State = {
  id: string
}

const initialState: State = {
  id: '',
}

const chatDetailReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.FETCH_CONVERSATION: {
      draftState.id = action.payload
    }
  }
}, initialState)

export default chatDetailReducer

import produce from 'immer'
import type { Draft } from 'immer'
import lodash from 'lodash'
import type { Message } from '../../types/local'

import actions from './chatsScreen.actions'

export type State = {
  isCreatedSuccessfully: boolean
}

const initialState: State = {
  isCreatedSuccessfully: false,
}

const chatScreenReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.IS_CREATED_SUCCESSFULLY:
      draftState.isCreatedSuccessfully = action.payload
      break
  }
}, initialState)

export default chatScreenReducer

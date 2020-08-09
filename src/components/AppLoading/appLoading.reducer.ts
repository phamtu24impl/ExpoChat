/**
 * @flow
 */

import produce from 'immer'
import type { Draft } from 'immer'

import actions from './appLoading.actions'

export type State = {
  isLoading: boolean,
}

export const initialState: State = {
  isLoading: false,
}

const appLoadingReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_IS_LOADING:
      draftState.isLoading = action.payload
      break

    // no default
  }
}, initialState)

export default appLoadingReducer

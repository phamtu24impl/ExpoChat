import produce from 'immer'
import type { Draft } from 'immer'

import type { User } from '../../types/local'

import actions from './auth.actions'

export type State = {
  token: string
  isAuthenticated: boolean
  currentUser: User
}

const initialState: State = {
  token: '',
  isAuthenticated: false,
  currentUser: {
    username: '',
    id: '',
  },
}

/* eslint-disable no-param-reassign */
const authDomainReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_AUTH_INFO:
      draftState.token = action.payload
      draftState.isAuthenticated = true
      break
    case actions.types.LOG_OUT:
      draftState.token = null
      draftState.isAuthenticated = false
    case actions.types.SET_CURRENT_USER:
      draftState.currentUser = action.payload
      break

    // no default
  }
}, initialState)

export default authDomainReducer

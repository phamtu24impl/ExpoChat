import { createSelector } from 'reselect'

import type { User } from '../../types/local'

import type { State } from './users.reducer'

const getState = (state: any) => state.auth

const getUsers = createSelector(getState, (state: State): User[] => state.users)

const authSelectors = {
  getUsers,
}

export default authSelectors

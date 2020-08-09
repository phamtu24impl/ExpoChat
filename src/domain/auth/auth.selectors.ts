import { createSelector } from 'reselect'

import type { User } from '../../types/local'

import type { State } from './auth.reducer'

const getState = (state: any) => state.auth

const getIsAuthenticated = createSelector(getState, (state: State): boolean => state.isAuthenticated)

const getAuthHeader = createSelector(getState, (state: State): string => state.token)

const getCurrentUser = createSelector(getState, (state: State): User => state.currentUser)

const authSelectors = {
  getIsAuthenticated,
  getAuthHeader,
  getCurrentUser,
}

export default authSelectors

import { createSelector } from 'reselect'

import type { State } from './appLoading.reducer'

const getState = (state: any): State => state.appLoading

const getIsLoading = createSelector(getState, (state: State): boolean => state.isLoading)

const appLoadingSelectors = {
  getIsLoading,
}

export default appLoadingSelectors

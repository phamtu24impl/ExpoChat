const types = {
  SET_IS_LOADING: 'SET_IS_LOADING',
}

const setIsLoading = (payload: boolean) => ({
  type: types.SET_IS_LOADING,
  payload,
})

const start = () => setIsLoading(true)

const finish = () => setIsLoading(false)

const appLoadingActions = {
  types,
  start,
  finish,
}

export default appLoadingActions

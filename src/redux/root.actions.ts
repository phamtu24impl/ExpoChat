const types = {
  RESET_STATE: 'root.RESET_STATE',
}

const resetState = () => ({
  type: types.RESET_STATE,
})

export default {
  resetState,
  types,
}

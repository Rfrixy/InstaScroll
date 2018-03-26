const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return state = action.value;
    default:
      return state
  }

}

export default isLoading

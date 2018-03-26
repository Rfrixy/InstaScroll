const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return state = action.value;
    default:
      return state
  }

  // return state
}

export default isLoading

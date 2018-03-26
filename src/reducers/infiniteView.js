
const infiniteView = (state = true , action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return action.value;
    default:
      return state
  }
}

export default infiniteView

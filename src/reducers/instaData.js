
const instaData = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return [
        ...state,
        ...action.data,
      ]
    case 'CARD_CLICK':
      console.log("I was called");
      console.log(action);
      return state;
    default:
      return state
  }
}

export default instaData

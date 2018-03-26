
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
    case 'CARD_LIKE':
        console.log("I was liked");
        console.log(action);
        let obj = state[action.id];

        if (obj.user_liked === true){
          obj.user_liked = false;
          obj.likes --;
        }else{
          obj.user_liked = true;
          obj.likes ++;
        }
        return [
          ...state.slice(0,action.id),
          obj,
          ...state.slice(action.id+1,state.length),
        ]

    default:
      return state
  }
}

export default instaData

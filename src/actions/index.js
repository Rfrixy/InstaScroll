import $ from 'jquery';


let nextTodoId = 0;
let nextCardId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const cardClick = id =>({
  type: 'CARD_CLICK',
  id,
})

export const getInstaData = () => (dispatch) => {
  return dispatch(fetchPosts())
}


const fetchPosts = () => dispatch => {

  let token = '4061522336.a0380d2.734c53e6a16941fda3da6d3f6ec93cac',
  num_photos = 5;
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      console.log(data.data[0]);
      let newObj = [];
      // console.log(firstObj);
      for( let x in data.data ){
        // $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        newObj = [...newObj,{imgsrc:data.data[x].images.low_resolution.url, caption:data.data[x].user.full_name, id:nextCardId++}];
      }
      dispatch(UpdateData(newObj));
      dispatch(LoadingFalse());

    },
    error: function(data){
      dispatch(LoadingFalse());
      return null;
    }
  });
}


export const UpdateData = (data)=>({
  type: 'UPDATE_DATA',
  data,
})

export const LoadingFalse = () => ({
  type: 'TOGGLE_LOADING',
  value: false,
})

export const LoadingTrue = () => ({
  type: 'TOGGLE_LOADING',
  value: true,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

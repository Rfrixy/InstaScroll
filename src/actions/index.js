import $ from 'jquery';


let nextCardId = 0;



export const cardClick = id =>({
  type: 'CARD_CLICK',
  id,
})

export const cardLike = id =>({
  type: 'CARD_LIKE',
  id,
})

export const getInstaData = () => (dispatch) => {
  return dispatch(fetchPosts())
}


const fetchPosts = () => dispatch => {

  let token = '4061522336.a0380d2.734c53e6a16941fda3da6d3f6ec93cac',
  num_photos = 4;
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
        let obj = data.data[x];
        newObj = [...newObj,{
          imgsrc:obj.images.low_resolution.url,
          caption:obj.user.full_name,
          likes:obj.likes.count,
          id:nextCardId++,
          user_liked:false,
          comments:[],
        }];
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

export const InfiniteFalse = () => ({
  type: 'TOGGLE_VIEW',
  value: false,
})

export const InfiniteTrue = () => ({
  type: 'TOGGLE_VIEW',
  value: true,
})

import * as types from '../actions/actionTypes';

const initialState = {
  posts: [{
    title: 'title here',
    description: 'description here',
    post: 'post here',
    id: 0
    }],
  message: ''
}

// const blogs = (state = initialState, action) => {
//   switch (action.type) {
//     case 'RECEIVE_DATA':
//       return [
//         ...action.posts
//       ]
//     case 'DELETE_BLOG':
//       return [
//         ...state.slice(0, action.index),
//         ...state.slice(action.index + 1)
//       ]
//     default:
//       return state
//   }
// }
// export default blogs

const blogReducer = (state = initialState, action = {}) => {
  console.log('reducer running')
  switch (action.type) {
    case types.RECEIVE_DATA:
      console.log("triggered!!")
      return {
        ...state,
        ...action.posts
      };
    case types.DELETE_BLOG:
      return {
        ...state,
        ...state.posts.slice(0, action.index).concat(...state.posts.slice(action.index + 1))
      };
    default:
      return state;
  }
}

export default blogReducer

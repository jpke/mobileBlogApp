import fetch from 'isomorphic-fetch'
import * as types from './actionTypes';

export const receiveData = (posts) => {
  console.log('action triggered!')
  return {
    type: 'RECEIVE_DATA',
    posts
  }
}

export const addPost = (title, description, content) =>  {
  console.log('action triggered')
  receiveData([{title, description, content}])
  // return dispatch => {
    // console.log('dispatch:', dispatch)
    // return fetch('http://localhost:8080/create-blog', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({
    //             title,
    //             content
    //           })
    //         })
    //         .then(response => response.json())
    //         .then(posts => dispatch(receiveData(posts)) )
  // }
  return {
    type: 'RECEIVE_DATA',
    posts: {
      title: title,
      description: description,
      content: content
    }
  }
}
export const deletePost = (index) => {
  return {
    type: 'DELETE_BLOG',
    index
  }
}

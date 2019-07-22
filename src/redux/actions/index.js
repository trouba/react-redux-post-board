import { ADD_POST, FETCH_POSTS, INCREMENT_POST_ID, POST_STATUS_OK, POST_STATUS_ERROR, APPLY_THEME } from './actionTypes';

export const addPost = ({ id, title, body }) => ({
  type: ADD_POST,
  data: {
    id,
    title,
    body
  }
});

export const fetchPosts = () => {

  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch(
        { type: FETCH_POSTS, data: json }))
      .then(dispatch(incrementPostId()))
  }
}

export const incrementPostId = () => ({
    type: INCREMENT_POST_ID
});

export const postStatusOk = () => ({
  type: POST_STATUS_OK
});

export const postStatusError = () => ({
  type: POST_STATUS_ERROR
});

export const applyTheme = (theme) => ({
  type: APPLY_THEME,
  data: {
    theme
  }
});
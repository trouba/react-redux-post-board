
import { 
  ADD_POST, 
  FETCH_POSTS,
  SET_POST_ID,
  INCREMENT_POST_ID,
  POST_STATUS_OK,
  POST_STATUS_ERROR,
} from '../actions/actionTypes';

const initialPostsState = {
  posts: [],
  id: 101, // Should start with fetched data length
  status: {
    type: 'pending',
    message: ''
  }
}

export default function postReducer(state = initialPostsState, action) {
  switch (action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.data]};
    case FETCH_POSTS:
      return {...state, posts: action.data}
    case INCREMENT_POST_ID:
      return {...state, id: state.id + 1}
    case POST_STATUS_OK:
      return {...state, status: {type: 'success', message: '👍 Message posted'}}
    case POST_STATUS_ERROR:
      return {...state, status: {type: 'error', message: '😞 Error: Can\'t post message'}}
    default:
      return state;
  }
}

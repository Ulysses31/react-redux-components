import {
  FETCH_POSTS,
  FETCH_POST_BY_ID,
  NEW_POST,
  DELETE_POST,
  UPDATE_POST
} from '../actions/postactions';

const initialState = {
  posts: [],
  post: {
    id: 0,
    postId: 1,
    name: '',
    email: '',
    body: ''
  }
};

export default function postReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('postReducer', state, action);
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POST_BY_ID:
      console.log('postReducer', state, action);
      return {
        ...state,
        post:
          action.payload === 0
            ? {
                id: 0,
                postId: 1,
                name: '',
                email: '',
                body: ''
              }
            : state.posts.find(
                (post) => post.id === action.payload
              )
      };
    case NEW_POST:
      console.log('postReducer', state, action);
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      console.log('postReducer', state, action);
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.id !== action.payload
        )
      };
    case UPDATE_POST:
      console.log('postReducer', state, action);
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        })
      };
    default:
      return state;
  }
}

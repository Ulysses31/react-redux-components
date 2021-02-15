import { v4 as uuidv4 } from 'uuid';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

const posts = [
  {
    id: uuidv4(),
    postId: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    id: uuidv4(),
    postId: 1,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
  }
];

export function fetchPosts() {
  return (dispatch) => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  };
}

export function fetchPostById(id) {
  return (dispatch) => {
    dispatch({
      type: FETCH_POST_BY_ID,
      payload: id
    });
  };
}

export function insertPost(post) {
  return (dispatch) => {
    dispatch({
      type: NEW_POST,
      payload: post
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_POST,
      payload: post
    });
  };
}

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  insertPost,
  updatePost,
  fetchPostById
} from '../state/actions/postactions';

function PostForm() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postState.post);
  const [curPost, setCurPost] = useState(post);

  useEffect(() => {
    setCurPost(post);
  }, [post]);

  const handleState = (e) => {
    setCurPost({
      ...curPost,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (curPost.id === 0) {
      // insert
      curPost.id = uuidv4();
      dispatch(insertPost(curPost));
    } else {
      // update
      dispatch(updatePost(curPost));
    }

    clearForm();
  };

  const clearForm = () => {
    setCurPost({
      id: 0,
      postId: 1,
      name: '',
      email: '',
      body: ''
    });
    dispatch(fetchPostById(0));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <table border='0'>
          <tbody>
            <tr>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <b>Name:</b>
              </td>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <input
                  type='text'
                  placeholder='enter name'
                  id='name'
                  name='name'
                  value={curPost.name}
                  onChange={handleState}
                  style={{ width: '100%' }}
                />
              </td>
            </tr>
            <tr>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <b>Email:</b>
              </td>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <input
                  type='text'
                  placeholder='enter email'
                  id='email'
                  name='email'
                  value={curPost.email}
                  onChange={handleState}
                  style={{ width: '100%' }}
                />
              </td>
            </tr>
            <tr>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <b>Description:</b>
              </td>
              <td
                valign='center'
                style={{ padding: '2px' }}
              >
                <textarea
                  type='text'
                  placeholder='enter description'
                  id='body'
                  name='body'
                  rows='7'
                  value={curPost.body}
                  onChange={handleState}
                  style={{ width: '100%', resize: 'none' }}
                />
              </td>
            </tr>
            <tr>
              <td
                colSpan='2'
                align='center'
                style={{ padding: '2px' }}
              >
                <button type='submit'>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </form>
      <br />
    </>
  );
}

export default PostForm;

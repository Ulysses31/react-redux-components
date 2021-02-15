import React from 'react';
import { Provider } from 'react-redux';
import PostForm from './components/postform';
import Posts from './components/posts';
import store from './state/store';

export default function App() {
  return (
    <Provider store={store}>
      <PostForm />
      <Posts />
    </Provider>
  );
}

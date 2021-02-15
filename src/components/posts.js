import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchPosts,
  fetchPostById,
  deletePost
} from '../state/actions/postactions';

class Posts extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPosts();
  }

  handleEditBtn(id) {
    this.props.fetchPostById(id);
  }

  handleDeleteBtn(id) {
    this.props.deletePost(id);
  }

  render() {
    return (
      <>
        <h1>Posts</h1>
        <hr />
        <table border='0'>
          <thead>
            <tr>
              <th>Post</th>
              <th colSpan='2'>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts
              .map((post) => (
                <tr key={post.id}>
                  <td>{post.name}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.handleEditBtn(post.id)
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        this.handleDeleteBtn(post.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              .slice(0, 5)}
          </tbody>
        </table>
        <br />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postState.posts
  };
}

const mapDispatchToProps = {
  fetchPosts,
  fetchPostById,
  deletePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

// ****** Props Validations ********
Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.fun,
  fetchPostById: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

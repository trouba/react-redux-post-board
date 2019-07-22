import React, { Component } from 'react';
import './Posts.css';
import Post from '../post/Post'
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/index'

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchPosts()
  }

  render() {
    return (
      <ul className="posts-list">
        {this.props.posts.map(post =>
          <Post post={post} key={post.id}></Post>
        )}
      </ul>
    );
  }
}

const mapDispatchprops = (dispatch) => {
  return { onFetchPosts: () => dispatch(fetchPosts()) }
}

const mapStateToProps = state => {
  return {
    posts: state.postsList.posts,
    id: state.postsList.id
  };
};

export default connect(
  mapStateToProps,
  mapDispatchprops
)(Posts);

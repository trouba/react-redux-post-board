import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';

class Post extends Component {

  render(props) {
    return (
      <div className={'post-container post-container-' + this.props.theme}>
        <h2 className={'post-title post-title-' + this.props.theme}>{this.props.post.title}</h2>
        <div className="post-content">{this.props.post.body}</div>
        <div>{this.props.post.id}</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps, null)(Post)

import React, { Component } from 'react';
import './PostForm.css';
import { connect } from 'react-redux';
import { postStatusOk, postStatusError, incrementPostId } from '../../redux/actions'
import classNames from 'classnames';

class PostForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      id: this.props.id,
      statusDisplayed: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (Math.random() > 0.3) { // randomize error to display error message
      let post = {
        title: this.state.title,
        body: this.state.body,
        id: this.state.id
      }
      this.props.onAddPost(post)
      this.props.onPostStatusOk()
      this.props.onIncrementPostId();
      this.resetForm();
    } else {
      this.props.onPostStatusError()
    }
    this.displayStatus();
    setTimeout(
      function() {
          this.hideStatus();
      }
      .bind(this),
      1000
    );
  }

  resetForm = () => {
    this.setState({
      title: '',
      body: '',
      id: this.props.id
    });
  }

  displayStatus = () => {
    this.setState({statusDisplayed: true})
  } 

  hideStatus = () => {
    this.setState({statusDisplayed: false})
  }

  render(props) {
    
    let statusClassName =  classNames(
      'form-status',
      'form-status--' + this.props.status.type,
      this.state.statusDisplayed ? 'form-status--displayed' : 'form-status--hidden'
    )

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={'post-form post-form-' + this.props.theme}>
          <div className={'form-group form-group-' + this.props.theme}>
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              id="postTitle"
              name="title"
              className="form-control from-control--fluid"
              value={this.state.title}
              onChange={this.handleInputChange} />
          </div>
          <div className={'form-group form-group-' + this.props.theme}>
            <label htmlFor="postContent">Message</label>
            <textarea
              id="postContent"
              name="body"
              className="form-control from-control--fluid"
              value={this.state.body}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-footer">
            <div className={statusClassName}>
             { this.props.status.message}
            </div>
            <div className="form-actions">
              <button className={'button button-primary button-' + this.props.theme}>Send</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    id: state.postsList.id,
    status: state.postsList.status,
    theme: state.theme
  };
};

const mapDispatchprops = (dispatch) => {
  return { 
    onPostStatusOk: () => dispatch(postStatusOk()),
    onPostStatusError: () => dispatch(postStatusError()),
    onIncrementPostId: () => dispatch(incrementPostId()) }
}

export default connect(
  mapStateToProps,
  mapDispatchprops
)(PostForm);


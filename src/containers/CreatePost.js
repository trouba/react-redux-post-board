import { connect } from 'react-redux';
import { addPost } from '../redux/actions';
import PostForm from '../components/postForm/PostForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
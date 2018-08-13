import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postAction";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPost();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map(post => {
          return (
            <div key={post.id} className="posts">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
export default connect(
  mapStateToProps,
  { fetchPost }
)(Posts);

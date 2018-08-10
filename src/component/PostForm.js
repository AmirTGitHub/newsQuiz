import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postAction";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = async event => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>post title</label>
            <br />
            <input
              placeholder="write a post title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>post body</label>
            <br />
            <textarea
              placeholder="write a post body"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
            <br />
            <br />
            <button type="submit">submit the form</button>
          </div>
        </form>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);

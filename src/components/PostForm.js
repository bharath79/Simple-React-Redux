import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.changed = this.changed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changed(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(data);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Add Posts</h3>
          <div>
            <input
              placeholder="enter title"
              name="title"
              value={this.state.title}
              onChange={this.changed}
            ></input>
          </div>
          <br></br>
          <div>
            <textarea
              placeholder="enter body"
              name="body"
              value={this.state.body}
              onChange={this.changed}
            ></textarea>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

PostForm.protoTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);

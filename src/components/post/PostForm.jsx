import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }
  changeHandeler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandle = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((res) => {
        console.log(res);
      })
      .then((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h2>Post Form</h2>
        <form action="" onSubmit={this.submitHandle}>
          <div>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.changeHandeler}
              placeholder="UserId"
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandeler}
              placeholder="title"
            />
          </div>

          <div>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.changeHandeler}
              placeholder="body"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

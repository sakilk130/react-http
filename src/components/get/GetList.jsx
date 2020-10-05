import React, { Component } from 'react';
import axios from 'axios';

class GetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      get: [],
      error: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((responce) => {
        this.setState({
          get: responce.data,
        });
        // console.log(this.state.get);
      })
      .catch((error) => {
        this.setState({
          error: 'Something Wrong',
        });
        // console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h2>Get-List</h2>
        <h2>{this.state.error}</h2>
        <ol>
          {this.state.get.map((gets, id) => (
            <li key={id}>
              <i>{gets.title}</i>{' '}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default GetList;

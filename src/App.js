import React from 'react';
import './App.css';
import GetList from './components/get/GetList';
import PostForm from './components/post/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      <GetList />
    </div>
  );
}

export default App;

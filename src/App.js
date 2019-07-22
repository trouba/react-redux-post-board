import React from 'react';

import './App.css';
import './styles/Buttons.css'
import './styles/Forms.css'
import './styles/Layout.css'

import Posts from './components/posts/Posts'
import ThemeSwitch from './components/theme/ThemeSwitch'

import CreatePost from './containers/CreatePost';

function App() {

  return (
    <div className="App">
      <div className="header">
        <ThemeSwitch></ThemeSwitch>
      </div>
      <div className="app-content">
        <CreatePost></CreatePost>
        <Posts></Posts>
      </div>
    </div>
  );
}

export default App;
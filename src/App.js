import React from 'react';
import Header from './components/Header'

import './App.scss';
import Bio from './components/Bio';
import Project from './components/Project';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Bio/>
      <Project/>
    </div>
  );
}

export default App;

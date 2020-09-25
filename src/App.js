import React from 'react';
import Header from './components/Header'

import './App.scss';
import Bio from './Bio';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Bio/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import images from './data.js';
import Header from './Header';
import ImageList from './ImageList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="gallery">
        <ImageList images={images}/>
      </div>
    </div>
  );
}

export default App;

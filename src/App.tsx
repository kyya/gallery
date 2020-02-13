import React from 'react';
import Gallery from './containers/Gallery';
import ThumbnailList from './containers/ThumbnailList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Gallery />
        <ThumbnailList />
      </div>
    </div>
  );
}

export default App;

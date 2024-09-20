import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Carousels from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category';

function App() {
  return (
    <div>
      <Header/>
      <Carousels/>
      <Category/>
    </div>
  );
}

export default App;

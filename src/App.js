import React, { useState } from 'react';
import Carousel from './components/carousel'
import Featured from './components/featured';

import './App.css';

function App() {  
  
  return (
    <div>
      <Carousel></Carousel>
      <Featured></Featured>
    </div>
  );
}

export default App;

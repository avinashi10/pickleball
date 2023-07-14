// LIBRARY IMPORTS
import React from 'react';

//LOCAL IMPORTS
import Pickleball101 from './Pickleball101.jsx';
import OpenPlay from './OpenPlay.jsx';
import PrivateLessons from './PrivateLessons';
import About from './About.jsx';
import Header from './Header/Header.jsx';

function App() {
  return (
      <div className="bg-light min-h-screen">
        <Header />
        <h1 className="font-sans text-red relative h-32 text-center mt-9 text-lg">
        Pickleball lessons with Darlene
        </h1>
        <Pickleball101 />
        <OpenPlay />
        <PrivateLessons />
        <About />
      </div>
  );
}

export default App;
import React from 'react';
import Pickleball101 from './Pickleball101.jsx';
import Openday from './Openday.jsx';
import PrivateLessons from './PrivateLessons';
import About from './About.jsx';

function App() {
  return (
      <div>
          <h1 className="relative h-32 text-center mt-9 text-lg">
          Pickleball lessons with Darlene
          </h1>
          <Pickleball101 />
          <Openday />
          <PrivateLessons />
          <About />
      </div>
  );
}

export default App;
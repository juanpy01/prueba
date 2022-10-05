import React from 'react';
import Clima from './components/Clima';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title="My Weather" />
      <div>
        <Clima />

      </div>
      
    </div>
  );
}

export default App;

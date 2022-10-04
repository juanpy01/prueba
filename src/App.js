import React from 'react';
import datos from './data';
import Clima from './components/Clima';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title="My Weather" />
      <div className='container d-flex'>
        {
          datos.map(dato=>
            <Clima
              key={dato.city}
              city={dato.city}
              lat={dato.lat}
              lon={dato.lon}
            />
        )}
      </div>
      
    </div>
  );
}

export default App;

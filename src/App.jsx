import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className="app">
      {['Eilat', 'London', 'New York', 'Alaska'].map((city) => (
        <Weather key={city} city={city} />
      ))}
    </div>
  );
};


export default App


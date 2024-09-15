import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='container'>
      <h1 className="header">מזג אוויר</h1>
      <div className="app">
      {['Eilat', 'London', 'New York', 'Alaska'].map((city) => (
        <Weather key={city} city={city} />
      ))}
    </div>
    </div>
    
  );
};


export default App


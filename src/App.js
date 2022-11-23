
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';





function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greetings={'Bienvenido a nuestra tienda galeria!'} />
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/layout/layout';






function App() {
  
  return (
    <Layout>
    <div className="App">
      <ItemListContainer
        greetings={'Bienvenido a nuestra tienda galeria!'} />
    </div>
    </Layout>
  );
}

export default App;

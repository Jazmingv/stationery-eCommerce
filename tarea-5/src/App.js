//import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './containers/ProductList';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </>
  );
}

export default App;
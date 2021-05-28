import React from 'react';
import { useProductsContext } from '../context/products-context';

function App() {
  const { products } = useProductsContext();

  return (
    <div className="App">
      <div>This is App component</div>
      <div>products: {products.length !== 0 && products[0].category}</div>
    </div>
  );
}

export default App;

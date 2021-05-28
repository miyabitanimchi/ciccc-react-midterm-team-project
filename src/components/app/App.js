import React, { useEffect } from 'react';
import { useProductsContext } from '../../context/products-context';
import Carousel from '../carousel/Carousel'
import './App.scss';

function App() {
  const { products } = useProductsContext();

  return (
    <div className="App">
      <div>This is App component</div>
      <div>products: {products.length !== 0 && products[0].title}</div>
      <Carousel item={products.length !== 0 && products[0].title}/>
{/* >>>>>>> f096fa1d4de9cea1f6e52ab2ba0668ce0c14b44d */}
    </div>
  );
}

export default App;

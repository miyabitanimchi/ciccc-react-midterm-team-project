import React, { useEffect } from 'react';
import { useProductsContext } from '../../context/products-context';
import Carousel from '../carousel/Carousel'
import './App.scss';

function App() {
  const { products } = useProductsContext();

  return (
    <div className="App">

      <div>
        <div>This is App component</div>
        {products.length !== 0 && (
          <div>
            <div>products: {products[0].title}</div>
            <Carousel item={products} />
          </div>
        )
        }
      </div>


    </div>
  );
}

export default App;

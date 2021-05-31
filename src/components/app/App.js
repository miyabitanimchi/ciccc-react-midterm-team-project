import React, { useEffect } from 'react';
import { useProductsContext } from '../../context/products-context';
import Carousel from '../carousel/Carousel'
import ItemList from '../itemList/ItemList'
import './App.scss';

function App() {
  const { products } = useProductsContext();

  return (
    <div className="app">

      <div>
        {/* <div>This is App component</div> */}
        {products.length !== 0 && (
          <div>
            <Carousel item={products} />
            <ItemList item={products} />
          </div>
        )
        }
      </div>


    </div>
  );
}

export default App;

import React, { useState, createContext, useContext } from 'react';
import fetchProducts from '../fetchAPI/products';

const productsObj = fetchProducts();

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsObj);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      { children }
    </ProductsContext.Provider>
  )
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider as default }

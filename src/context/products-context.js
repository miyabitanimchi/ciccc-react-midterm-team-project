import React, { useState, createContext, useContext, useEffect } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        console.error('response.ok:', response.ok);
        console.error('response.status:', response.status);
        console.error('response.statusText', response.statusText);
        throw new Error(response.statusText);
      }
    })
    .then((response) => response.json())
    .then((json) => {
      setProducts(json);
      console.log(json);
    })
    .catch((error) => {
      console.error('Error occured', error);
    })  
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      { children }
    </ProductsContext.Provider>
  )
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider as default }

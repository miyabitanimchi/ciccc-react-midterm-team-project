<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import fetchProducts from '../fetchAPI/products'
import Carousel from './Carousel'


function App() {

const [item,setItem]=useState([])

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
        // console.log(json);
        setItem(json)
        console.log(item)
      })
      .catch((error) => {
        console.error('Error occured', error);
      })
  },[])
// console.log(item)

  return (
    <div className="App">
<Carousel item={item}/>
=======
import React, { useEffect } from 'react';
import { useProductsContext } from '../context/products-context';

function App() {
  const { products, setProducts } = useProductsContext();

  return (
    <div className="App">
      <div>This is App component</div>
      <div>products: {products.length !== 0 && products[0].category}</div>
>>>>>>> f096fa1d4de9cea1f6e52ab2ba0668ce0c14b44d
    </div>
  );
}

export default App;

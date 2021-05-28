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
    </div>
  );
}

export default App;

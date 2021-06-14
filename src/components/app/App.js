import React, { useEffect, useState } from 'react';
import { useProductsContext } from '../../context/products-context';
import Carousel from '../carousel/Carousel';
import ItemList from '../itemList/ItemList';
import Greeting from '../greeting/Greeting';
import { useAuthContext } from "../../context/auth-context";
import './App.scss';

function App() {

  const { products } = useProductsContext();
  console.log(products)
  const [randomItem, setRandomItem] = useState([])
  const [itemList, setItemList] = useState([])

  const { user } = useAuthContext();
  useEffect(() => {
    user && console.log(`Hello, ${user.displayName}!`);
  }, [user]);

  //    ================ Shuffle function 
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return;
  }

  useEffect(() => {
    //    ================ Shuffle item 
    let randomItemArr = []
    let itemListArr = []
    if (products.length !== 0) {
      shuffle(products)
      for (let i = 0; i < 19; i++) {
        randomItemArr.push(products[i])
      }
      // Splice the array, first 9 to random list, the rest to item list
      itemListArr = randomItemArr.splice(9, 19)
    }

    //    ================ update item by useState
    setRandomItem(randomItemArr)
    setItemList(itemListArr)
  }, [products])

  return (
    <div className="app">
      <div>
        {products.length !== 0 && (
          <div>
            {user &&
            <Greeting user={user} />
            }
            
            <Carousel item={randomItem} title={"Best Seller"} />
            <ItemList item={itemList} title={"Feature Items"} listClass={"itemList"} wrapClass={"itemWrap"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


  // useEffect(() => {
  //     console.log(randomItem)
  //     console.log(itemList)
  // }, [randomItem,itemList])
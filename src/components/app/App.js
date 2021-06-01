import React, { useEffect ,useState} from 'react';
import { useProductsContext } from '../../context/products-context';
import Carousel from '../carousel/Carousel'
import ItemList from '../itemList/ItemList'
import './App.scss';

function App() {

  const { products } = useProductsContext();
const [randomItem, setRandomItem] = useState([])
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
    if (products.length !== 0) {
        shuffle(products)
        for (let i = 0; i < 9; i++) {
            randomItemArr.push(products[i])
        }
    }

    //    ================ update item by useState
    setRandomItem(randomItemArr)
    // console.log(randomItem)
}, [products])

// useEffect(() => {
//     console.log(randomItem)
// }, [randomItem])

// console.log(randomItem)
// console.log(products)


  return (
    <div className="app">

      <div>
        {/* <div>This is App component</div> */}
        {products.length !== 0 && (
          <div>
            <Carousel item={randomItem} />
            <ItemList item={products} />
          </div>
        )
        }
      </div>


    </div>
  );
}

export default App;

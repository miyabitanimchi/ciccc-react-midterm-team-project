import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import CarouselItem from './CarouselItem'
import './Carousel.scss';

const Carousel = ({ item }) => {
    const [randomItem, setRandomItem] = useState([])
=======
import { useProductsContext } from '../../context/products-context';
import CarouselItem from './CarouselItem'
import './Carousel.scss';

const Carousel = () => {

    const [item, setItem] = useState([])


    const { products } = useProductsContext();
>>>>>>> origin/test

    useEffect(() => {
        let randomItem = []

<<<<<<< HEAD
        if (item.length !== 0) {
            while (randomItem.length < 3) {
                const randomIndex = Math.floor(Math.random() * 19)
                if (randomItem.indexOf(randomIndex) == -1) {
                    randomItem.push(item[randomIndex])
                }
            }
            // console.log(randomItem)
        }
        setRandomItem(randomItem)
        console.log(randomItem)
    }, [item])

    useEffect(() => {
        console.log(randomItem)
    }, [randomItem])
=======
        if (products !== 0) {



            while (randomItem.length < 3) {
                const randomIndex = Math.floor(Math.random() * 19)
                if (randomItem.indexOf(randomIndex) == -1) {
                    randomItem.push(products[randomIndex])
                }
            }

            // console.log(randomItem)
        }
        setItem(randomItem)
        console.log(randomItem)


    }, [products])

    useEffect(() => {

        console.log(item)
    }, [item])

>>>>>>> origin/test

    return (
        <>
            <div className="carousel">
                <ul>
<<<<<<< HEAD
                    { randomItem.length !== 0 && (
                        <CarouselItem item={randomItem[0]}/>
                    )}
                    
                    {/* <img src={randomItem[0].image}/> */}
=======
                    {item.length !== 0 && <CarouselItem item={item[0]}/> }
                    
                    {item.length !== 0 && <img src={item[0].image}/>}
>>>>>>> origin/test
                    {/* <CarouselItem item={randomItem.length !== 0 && randomItem[0]}/> */}

                    {/* <CarouselItem item={randomItem[1]}/>
                    <CarouselItem item={randomItem[2]}/> */}
                </ul>

            </div>
        </>
    )
}

export default Carousel
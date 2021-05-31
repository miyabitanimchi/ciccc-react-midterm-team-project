import React, { useEffect, useState } from 'react';
import CarouselItemSlide from './CarouselItemSlide';
import './Carousel.scss';

const Carousel = ({ item }) => {

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
        let randomItem = []
        if (item.length !== 0) {
            shuffle(item)
            for (let i = 0; i < 9; i++) {
                randomItem.push(item[i])
            }
        }

        //    ================ update item by useState
        setRandomItem(randomItem)
        console.log(randomItem)
    }, [item])

    useEffect(() => {
        console.log(randomItem)
    }, [randomItem])


    return (
        <>
            <div className="carousel">
                <h2>Best Seller</h2>
                {randomItem.length !== 0 && (
                        <CarouselItemSlide item={randomItem}/>
                )}
            </div>
            
        </>
    )
}

export default Carousel
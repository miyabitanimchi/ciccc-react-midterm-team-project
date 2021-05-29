import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem'
import './Carousel.scss';

const Carousel = ({ item }) => {
    const [randomItem, setRandomItem] = useState([])

    useEffect(() => {
        let randomItem = []

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

    return (
        <>
            <div className="carousel">
                <ul>
                    { randomItem.length !== 0 && (
                        <CarouselItem item={randomItem[0]}/>
                    )}
                    
                    {/* <img src={randomItem[0].image}/> */}
                    {/* <CarouselItem item={randomItem.length !== 0 && randomItem[0]}/> */}

                    {/* <CarouselItem item={randomItem[1]}/>
                    <CarouselItem item={randomItem[2]}/> */}
                </ul>

            </div>
        </>
    )
}

export default Carousel
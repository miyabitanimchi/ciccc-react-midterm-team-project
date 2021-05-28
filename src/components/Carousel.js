import React , {useEffect }from 'react';
import CarouselItem from './CarouselItem'

const Carousel = (props) => {

    
    const item = props.item
    // const randomIndex = Math.floor(Math.random() * 19)
    // const randomItem = []
    console.log(item[2])

    // for(let i=0;randomItem.length < 3;i++){
    //          randomItem.push(item[randomIndex])
    //     console.log(randomItem)

    // }






    return (
        <>
            <div className="carousel">
                {/* <p>{item[1].title}</p> */}
            {/* <img src={item[1].image}/> */}
                <CarouselItem item={item[1]}/>
                <CarouselItem item={item[2]}/>
                <CarouselItem item={item[3]}/>
            </div>
        </>
    )
}

export default Carousel
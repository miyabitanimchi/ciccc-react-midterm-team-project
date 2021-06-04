import React from 'react';
import CarouselItemSlide from './CarouselItemSlide';
import './Carousel.scss';


const Carousel = (props) => {


    return (
        <>
        <div className="carouselWrap">
            <div className="carousel">
                <h2>{props.title}</h2>
                {props.item.length !== 0 && (
                        <CarouselItemSlide item={props.item}/>
                )}
            </div>
            </div>
        </>
    )
}

export default Carousel
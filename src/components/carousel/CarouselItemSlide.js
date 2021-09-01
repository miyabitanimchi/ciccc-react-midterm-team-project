import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './ItemModal.scss';




const CarouselItemSlide = (props) => {

    // ============  Hook for current slide
    const [current, setCurrent] = useState(0)

    // ============ Set Array of 3 Slides each with 3 Images
    const [slide] =
        useState([[props.item[0], props.item[1], props.item[2]],
        [props.item[3], props.item[4], props.item[5]],
        [props.item[6], props.item[7], props.item[8]]
        ])

    // ============ Check arrow if is end of slide then disable it
    useEffect(() => {
        const leftArrow = document.getElementsByClassName("leftArrow")[0]
        const rightArrow = document.getElementsByClassName("rightArrow")[0]
        current === 0 ? leftArrow.style.pointerEvents = "none" : leftArrow.style.pointerEvents = "auto"
        current === 2 ? rightArrow.style.pointerEvents = "none" : rightArrow.style.pointerEvents = "auto"
    }, [current])

    // ============ left arrow move to previous slide 
    const prevSlide = () => {
        current !== 0 && setCurrent(current - 1)
    }

    // ============ Right arrow move to next slide 
    const nextSlide = () => {
        current !== 2 && setCurrent(current + 1)
    }

    return (
        <>
            {props.length !== 0 && (
                <>
                    <div className="carouselSlide">

                        <IoIosArrowDropleftCircle
                            opacity={current === 0 ? 0 : 1}
                            className="leftArrow" size={30} onClick={prevSlide} />
                       

                        {slide.map((slide, index) => {
                            return (
                                <div className={current === index ? "slide current" : "slide"} key={index}>
                                    {current === index && (
                                        <CarouselItem item={slide} />
                                    )}
                                </div>
                            )
                        })}
 <IoIosArrowDroprightCircle
                            opacity={current === 2 ? 0 : 1}
                            className="rightArrow" size={30} onClick={nextSlide} />

                    </div>
                </>
            )}
        </>
    )
}

export default CarouselItemSlide;

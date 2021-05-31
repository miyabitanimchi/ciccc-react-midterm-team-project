import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';



const ItemSlide = (props) => {

    const [slide, setSlide] =
        useState([[props.item[0], props.item[1], props.item[2]],
        [props.item[3], props.item[4], props.item[5]],
        [props.item[6], props.item[7], props.item[8]]
        ])

const [none] = useState(undefined)

    const [current, setCurrent] = useState(0)
    const length = slide.length

    const prevSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)
        // console.log(slide[0])
        // console.log(slide.length)
        // console.log("slide1", slide[1][0])
        // console.log(current)
        // console.log(slideList)
    }

    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)

    }

    // const none = {false}

    return (
        <>
            {props.length !== 0 && (
                <>


                    <div className="carouselSlide">
                        
                    <IoIosArrowDropleftCircle
                        opacity={current === 0 ? 0 : 1} pointerEvents ={current === 0 && none}
                        className="leftArrow" size={30} onClick={prevSlide} />
                    <IoIosArrowDroprightCircle
                        opacity={current === 2 ? 0 : 1} pointerEvents ={current === 2 && none}
                        className="rightArrow" size={30} onClick={nextSlide} />
                        {slide.map((slide, index) => {
                            return (
                                <div className={current === index ? "slide current" : "slide"} key={index}>
                                    {current === index && (
                                        <CarouselItem item={slide} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default ItemSlide;

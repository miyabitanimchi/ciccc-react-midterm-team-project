import React, { useState, useEffect } from 'react';

const CarouselItem = (props) => {

    const [image, setImage] = useState("")

    useEffect(() => {

        // const url = props.item.image
        setImage(props.item.image)

    })


    return (
        <li>
            {/* <p>{props.item.image}</p> */}
            <img src={image} />
        </li>
    )





}



export default CarouselItem
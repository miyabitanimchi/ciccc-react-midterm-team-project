import React from 'react';
import Item from './Item';

const CarouselItem = (props) => {

    // console.log(props)

    return (
        <>

            {props.item.map((item,index) => {
                return (
                    <Item key={index} item={item}/>
                )
            })}


        </>
    )


}

export default CarouselItem

  // <a href={"/detail/:id" + props.item.id} > <img src={props.item.image} /></a>
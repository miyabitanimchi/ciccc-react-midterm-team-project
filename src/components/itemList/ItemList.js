import React, { useState, useEffect } from 'react';
import Item from '../carousel/Item'
import './ItemList.scss'

const ItemList = ({ item }) => {

// const random = document.ge

    return (
        <>
            <div className="itemList">
                <h2>Feature Items</h2>

                <div className="itemWrap">
                    {item.map((item, index) => {
                        return (<Item item={item} key={index} />)
                    })}
                </div>

            </div>
        </>
    )


}

export default ItemList  

// console.log(prop)


    // const [items, setItem] = useState(item)

    // useEffect(() => {
    //     const random = document.getElementsByClassName("slide")[0]
    //     console.log(random)
    // }, [item])

    // console.log(items)
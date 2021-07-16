import React,{useState} from 'react';
import Item from '../carousel/Item'
import './ItemList.scss'

const ItemList = (props) => {


    return (
        <>
            <div className={props.listClass}>
                <h2>{props.title}</h2>

                <div className={props.wrapClass}>
                    {props.item.map((item, index) => {
                        return (<Item item={item} key={index} description={props.description}/>)
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
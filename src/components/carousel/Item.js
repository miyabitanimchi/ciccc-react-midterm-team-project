import React from 'react';
import { Link } from 'react-router-dom'

const Item = (props) => {
// console.log(props)

const test = (e) =>{
    console.log(`hover ${e.target.title}`)
}

    return (
        
        <div className = "item" >
            <Link to={"/detail/" + props.item.id}> <img src={props.item.image} onMouseOver={(e)=>test(e)}/></Link>
        </div>
    )


}

export default Item



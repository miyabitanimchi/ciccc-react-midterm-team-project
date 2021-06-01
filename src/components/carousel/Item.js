import React from 'react';

const Item = (props) => {
// console.log(props)
<<<<<<< Updated upstream
=======

const test = (e) =>{
    console.log(`hover ${e.target.title}`)
}

>>>>>>> Stashed changes
    return (
        
        <div className = "item" >
            <a href={"/detail/" + props.item.id}> <img src={props.item.image} onMouseOver={(e)=>test(e)}/></a>
        </div>
    )


}

export default Item



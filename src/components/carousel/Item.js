import React from 'react';

const Item = (props) => {
// console.log(props)
    return (
        <div className = "item">
            <a href={"/detail/" + props.item.id}> <img src={props.item.image} /></a>
        </div>
    )


}

export default Item



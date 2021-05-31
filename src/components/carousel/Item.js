import React from 'react';

const Item = (props) => {

    return (
        <div className = "item">
            <a href={"/detail/:id" + props.item.id} > <img src={props.item.image} /></a>
        </div>
    )


}

export default Item



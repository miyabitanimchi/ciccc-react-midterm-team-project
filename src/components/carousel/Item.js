import React, {useState } from 'react';
import './ItemModal.scss'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const [hover, setHover] = useState(false)

    return (

        <div className="item" >
            <Link to={"/detail/" + props.item.id}>
                <img src={props.item.image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            </Link>
            {hover !== false &&
                <div style={{ pointerEvents: 'none' }} className="modal">
                    <div className="modalInfo">
                        <ul>
                        <Link to={"/detail/" + props.item.id} style={{ pointerEvents: 'none', textDecoration: 'none', margin:0 }}>
                            <li>More for "{props.item.category}"</li>
                            </Link>
                            <li>{props.item.title}</li>
                            <li>Price: ${props.item.price}</li>
                            {/* <li>Product Detail</li> */}
                        </ul>
                    </div>
                </div>
            }
        </div >
    )


}

export default Item



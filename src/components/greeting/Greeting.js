import React from 'react';
import './Greeting.scss'
import { Link } from 'react-router-dom'

const Greeting = (props) =>{

return(

    <div className="greetingWrap">
        <Link to={"/account/"}><div className="imgWrap"><img src={props.user.providerData[0].photoURL}/></div></Link>
        <h2>Welcome back! {props.user.providerData[0].displayName}</h2>
    </div>

)

}

export default Greeting


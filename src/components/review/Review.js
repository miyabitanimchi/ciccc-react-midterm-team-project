import React, {useContext} from 'react'
import {CommentsContext} from '../../context/comments-context';


export default function Review() {


    const {writeComment} = useContext(CommentsContext)
    console.log(writeComment)

    return (
        <div>
            <input placeholder="name"></input>
            <input placeholder="comment"></input>
            <input placeholder="rating"></input>
        </div>
    )
}

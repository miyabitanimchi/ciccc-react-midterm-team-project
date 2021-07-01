import React, { useContext, useState } from 'react';
import { CommentsContext } from '../../context/comments-context';

export default function Reviews(props) {


    const  {writeComment} = useContext(CommentsContext)
    const [comment, setComment] = useState({

        // name: "",
        comment: "",
        rating: 0


    })

    const submit = (e) => {
        e.preventDefault()
        writeComment(comment,props.id)
    }

    // console.log(props.id)


    return (
        <div>
            <form onSubmit={submit}>
                {/* <input placeholder="name" onChange={(e) => setComment({ ...comment, name: e.target.value })}></input> */}
                <input placeholder="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })}></input>
                <input placeholder="rating" type="number" onChange={(e) => setComment({ ...comment, rating: parseInt(e.target.value) })}></input>
                <button type="submit">Post</button>
            </form>

        </div>
    )
}

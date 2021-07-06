import React, { useContext, useEffect, useState } from 'react';
import { CommentsContext } from '../../context/comments-context';
import { useAuthContext } from "../../context/auth-context";

import ReviewInput from './ReviewInput';

export default function Reviews(props) {

    // const { user } = useAuthContext();
    const { writeComment, setReadProductId, productComments } = useContext(CommentsContext)


    // const submit = (e) => {
    //     e.preventDefault()
    //     const cmInput = document.getElementById("cmInput")
    //     const rtInput = document.getElementById("rtInput")
    //     writeComment(comment, props.id)
    //     cmInput.value = ""
    //     rtInput.value = ""
    // }


    useEffect(() => {
        setReadProductId(props.id)
    }, [props.id])

    return (
        <div>
            <h1>Product Review</h1>
            {productComments.length !== 0 ?
                <>
                    {
                        productComments.map((data, index) => {
                            return (
                                <div key={index}
                                    style={{
                                        border: "1px solid black",
                                        margin: "5px"
                                    }}
                                >
                                    <span>{data.name} posted at {data.postDate}</span>
                                    <p>{data.comment}</p>
                                    <p>Rating: {data.rating}</p>
                                </div>
                            )

                        })
                    }
                </>
                :
                <div>There are no comments yet</div>
            }

            {/* <form onSubmit={submit}>
                <input id="cmInput" placeholder="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })}></input>
                <input id="rtInput" placeholder="rating" type="number" onChange={(e) => setComment({ ...comment, rating: parseInt(e.target.value) })}></input>
                <button type="submit">Post</button>
            </form> */}
            <ReviewInput/>
        </div>
    )
}

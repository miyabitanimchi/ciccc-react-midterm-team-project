import React, {useState, useContext} from 'react'
import {CommentsContext} from '../../context/comments-context';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import moment from 'moment';


export default function ReviewInput() {

    const { writeComment,readProductId} = useContext(CommentsContext)

    const [comment, setComment] = useState({
        comment: "",
        rating: 0,
        postDate: moment().format('LL')
    })

    const submit = (e) => {
        e.preventDefault()
        const cmInput = document.getElementById("cmInput")
        const rtInput = document.getElementById("rtInput")
        writeComment(comment, readProductId)
        cmInput.value = ""
        rtInput.value = ""
    }




    return (
        <div>
            <form onSubmit={submit}>
                <input id="cmInput" placeholder="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })}></input>
                <input id="rtInput" placeholder="rating" type="number" onChange={(e) => setComment({ ...comment, rating: parseInt(e.target.value) })}></input>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

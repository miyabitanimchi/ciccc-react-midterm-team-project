import React, { useState, useContext } from 'react'
import { CommentsContext } from '../../context/comments-context';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import moment from 'moment';


const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

export default function ReviewInput() {

    const { writeComment, readProductId,labels } = useContext(CommentsContext)

    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    const [comment, setComment] = useState({
        comment: "",
        rating: value,
        postDate: moment().format('LL')
    })

    const submit = (e) => {
        e.preventDefault()
        const cmInput = document.getElementById("cmInput")

        writeComment(comment, readProductId)
        cmInput.value = ""
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input id="cmInput" placeholder="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })}></input>
                <button type="submit">Post</button>
            </form>

            <div className={classes.root}>
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setComment({...comment, rating:newValue})
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                />
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>

        </div>
    )
}

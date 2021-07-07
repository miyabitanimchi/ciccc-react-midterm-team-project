import React, { useContext, useEffect } from 'react';
import { CommentsContext } from '../../context/comments-context';
import ReviewInput from './ReviewInput';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function Reviews(props) {

    const { setReadProductId, productComments } = useContext(CommentsContext)

    useEffect(() => {
        setReadProductId(props.id)
    }, [props.id])

    return (
        <div>
            <h1>Product Review</h1>
            {productComments.length !== 0 ?
                <>
                    {productComments.map((data, index) => {
                        return (
                            <div key={index}
                                style={{
                                    border: "1px solid black",
                                    margin: "5px"
                                }}
                            >
                                <span>{data.name} posted at {data.postDate}</span>
                                <p>{data.comment}</p>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating name="read-only" value={data.rating} readOnly />
                                </Box>
                            </div>
                        )
                    })
                    }
                </>
                :
                <div>There are no comments yet</div>
            }

            <ReviewInput />
        </div>
    )
}

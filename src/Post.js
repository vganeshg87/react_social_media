import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

const Post = ({ post }) => {
    const { id } = useParams();
    console.log("Post indi" + post)
    return (

        <article >

            <h4>{post != undefined ? post.id : null}</h4>
            <h2>{post != undefined ? post.title : null}</h2>
            <h3>{post.body}</h3>
            {/* <h3>{(post != undefined  && post.length < 25)? post : null}</h3>
            <h3>{(post != undefined  && post.length > 25)? post.slice(0,50) : null}...</h3> */}
                <hr></hr>

        </article>
    )
}

export default Post
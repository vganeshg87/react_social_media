import React from 'react'
import Post from './Post'

const Feed = ({ posts }) => {

    console.log("Feed" + posts)
    return (
        <> 
        
        {posts[0].map(post => (
            <Post key={post.id} post={post} />
        ))}


          {/* {posts.map ((post) => <Post key={post.id} post={post} /> )} */}

        </>


    )
}

export default Feed
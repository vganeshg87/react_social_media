import React, { Fragment } from 'react'
import { Routes , Route , Link} from 'react-router-dom';

const PostPage = () => {
  return (

    <Fragment>
    <h2>
    <div>PostPage</div>
    </h2>

      <Link to="/postpage/1">Post1</Link><br></br>

      <Link to="/postpage/2">Post2</Link><br></br>

      <Link to="/postpage/3">Post3</Link>
      </Fragment>
  )
}

export default PostPage
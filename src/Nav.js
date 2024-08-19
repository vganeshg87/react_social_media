import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Search , setSearch , searchsubmit}) => {
  return (
    <nav>
    <div>
      <form onSubmit={searchsubmit}>
      <input type="text" 
             placeholder="Search Box"
             value={Search}
             onChange={(e) => setSearch(e.target.value)}
            ></input>
      </form>
    </div>

    <ul>

   <li>  <Link to="/">Home</Link></li>
   <li>  <Link to="post">Post</Link></li>
   <li>  <Link to="about">About</Link></li>
    </ul>
    </nav>
  )
}

export default Nav
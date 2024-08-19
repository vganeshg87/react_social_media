import React from "react";
import Feed from "./Feed"

const Home = ({posts}) => {
  return (
             
      <main className="">

            { posts.length ? (<Feed posts = {posts} />) : (<p>No Posts to display</p>) }
      </main>



  )
}

export default Home
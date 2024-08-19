import React, { useState } from 'react'



const NewPost = ({ newContent, setNewContent, newTitle, setNewTitle, handlenewpostsubmit }) => {
  return (
    <>
      <form onSubmit={handlenewpostsubmit}>
        <input
          type="text"
          placeholder='Title'
          value = {newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>

        <textarea
          type="text"
          placeholder='Content'
          value = {newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>

        <button>Submit</button>
      </form>
    </>
  )
}

export default NewPost
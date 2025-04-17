import React from 'react'

const Post = ({post}) => {
  return (
    <div className='single-post'>
        <h6>{post.title.substring(0, 10)}</h6>
        <p>{post.body.substring(0, 20)}</p>
    </div>
  )
}

export default Post
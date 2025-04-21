import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {

  const handleDelete = () => {
    fetch(`http://localhost:4000/posts/${post.id}`, {
      method: 'DELETE'
    }).then(() => {
     
      window.location.reload();
    
    });
  };
  

  return (
    <div className='single-post'>
        <h6>{post.title.substring(0, 10)}</h6>
        <p>{post.body.substring(0, 20)}</p>
        <button><Link to={`/posts/${post.id}`}>Read more..</Link></button>
        <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default Post
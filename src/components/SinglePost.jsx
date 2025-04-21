import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const SinglePost = () => {
    const [post, setPost] = useState({})
    let p = useParams()
    let id = parseInt(p.id)

    useEffect(()=>{

        fetch(`http://localhost:4000/posts/${id}`)
        .then(r => r.json())
        .then(data => setPost(data))
        .catch(e => console.log(e))
    }, [post])

    console.log(post)

    if(!post) return <div>Loading....</div>
    
  return (
    <div>
        <Navbar />
        <div className='App'>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
        </div>
        
        
    </div>
  )
}

export default SinglePost
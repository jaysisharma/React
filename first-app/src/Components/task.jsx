import React, { useState } from 'react'
import { useEffect } from 'react'
import './Task.css'

const Task = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchapi();
    }, []);

    const fetchapi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await data.json()
        console.log(json)
        setPosts(json)
    }
    return (
        <>
            <div className="cards">
            {posts.map(post => {
                return <div className="card" key={post.id}>
                    <p>{post.id}    </p>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            })}
            </div>
        </>
    )
}

export default Task

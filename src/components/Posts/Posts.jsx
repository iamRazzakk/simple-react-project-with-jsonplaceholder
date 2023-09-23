import React from 'react';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className='usersStyle1'>
            <h1>posts: {posts.length}</h1>
            <div>
                {
                    posts?.map(post => <Post key={post.id} post={post} />)
                }
            </div>

        </div>
    );
};

export default Posts;
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const { id, title, body } = post;
    const nevigate = useNavigate()
    const handleGoBack = () => {
        nevigate(-1)
    }
    return (
        <div className=''>
            <h1>Post Detail About:</h1>
            <p>Title{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
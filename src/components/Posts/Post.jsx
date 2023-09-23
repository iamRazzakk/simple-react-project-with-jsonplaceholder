import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const nevigate = useNavigate();
    const handlerShow = () => {
        nevigate(`/post/${id}`)
    }
    return (
        <div className='userStyle'>
            <h1>PostId: {id}</h1>
            <p>Post Title: {title}</p>
            {/* <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Visit us</button></Link> */}
            <button onClick={handlerShow}>Show detail</button>
        </div>
    );
};

export default Post;
import React from 'react';
import "./User.css"
import { Link } from 'react-router-dom';
const User = ({ user }) => {
    const { name, id, email, phone } = user
    return (
        <div className='userStyle'>
            <h1>{id}</h1>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            {/* <Link to={`/user/:${id}`}><button className='btn'>Show Detail</button></Link> */}
            <Link to={`/users/${id}`}>Show Detail</Link>
        </div>
    );
};

export default User;
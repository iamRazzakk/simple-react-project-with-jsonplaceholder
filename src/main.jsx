import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import Users from './components/Users/Users.jsx';
import UserDetail from './components/UserDetail/UserDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import Error from './components/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users ></Users>
      },
      {
        path: '/users/:userId',
        element: <UserDetail></UserDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: '/post/:userId',
        element: <PostDetail></PostDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

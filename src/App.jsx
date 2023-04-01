import React, { useState } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blogs/Blog';
import Bookmark from './components/Bookmark/Bookmark';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  let [blog, setBlog] = useState([])
  let handleBookMark = (blog) => {
    setBlog(blog)
    let item = JSON.parse(localStorage.getItem('Bookmark'))
    
    if(item.includes(blog.blogTitle)){
     toast('Bookmark already Exist')
    }
  }


  let [readTime, setReadTime] = useState(0);
  let handleReadTime = (time) => {
      let newReadtime = readTime + time.readTime;
      setReadTime(newReadtime)
  }

  return (
    <div className='container'>
      <Header/>
      <div className=' d-lg-flex gap-3'>
      <Blog handleBookMark={handleBookMark} handleReadTime={handleReadTime}/>
      <Bookmark blog={blog} readTime={readTime}/>
      </div>
    </div>
  );
};

export default App;
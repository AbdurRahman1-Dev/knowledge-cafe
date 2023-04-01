import React, { useState } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blogs/Blog';
import Bookmark from './components/Bookmark/Bookmark';
import './App.css'

const App = () => {
  let [blog, setBlog] = useState([])
  let handleBookMark = (blog) => {
    setBlog(blog)
  }

  let [readTime, setReadTime] = useState(0);

  let handleReadTime = (time) => {
      let newReadtime = readTime + time.readTime;
      setReadTime(newReadtime)
  }
  console.log(readTime);


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
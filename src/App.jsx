import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blogs/Blog';
import Bookmark from './components/Bookmark/Bookmark';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className=' d-lg-flex gap-4'>
      <Blog/>
      <Bookmark/>
      </div>
    </div>
  );
};

export default App;
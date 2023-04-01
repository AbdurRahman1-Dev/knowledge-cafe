import React, { useState } from 'react';

let arr = []

const Bookmark = (blogList) => {
  let mainBlog = arr.filter((e, index) => {
    return arr.indexOf(e) === index;
  })
  console.log(mainBlog);
arr.push(blogList.blog)
  return (
    <div className='bookmark-sec'>
      <div>
        <h1 >spend time</h1>
      </div>
      <div className='bookmarkBg p-3'>
        <h4 className='fw-bold '>Bookmarked Blogs: {mainBlog.length - 1}</h4>
        {
          mainBlog.map((blogs)=> {
            return <p className='bg-light p-2 rounded-3 fw-bold'> {blogs.blogTitle}</p>
          })
        }
      </div>
    </div>
  );
};

export default Bookmark;
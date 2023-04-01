import React, { useState } from 'react';

let arr = []

const Bookmark = (blogList) => {
arr.push(blogList.blog)
let mainBlog = arr.filter((e, index) => {
    return arr.indexOf(e) === index;
})
mainBlog.splice(0,1)
// console.log(mainBlog);
// if()

  return (
    <div className='bookmark-sec'>
      <div>
        <h1 >spend time</h1>
      </div>
      <div className='bookmarkBg p-3'>
        <h4 className='fw-bold '>Bookmarked Blogs: {mainBlog.length }</h4>
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
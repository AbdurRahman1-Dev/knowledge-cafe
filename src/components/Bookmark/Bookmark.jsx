import React, { useState } from 'react';

let arr = []
const Bookmark = (blogList) => {


arr.push(blogList.blog)
let mainBlog = arr.filter((e, index) => {
    return arr.indexOf(e) === index;
})
mainBlog.splice(0,1)


  return (
    <div className='bookmark-sec'>
      <div className='bg-info p-3 mb-3 text-light shadow-sm rounded-3'>
        <h5 className='fw-bold'>
          Spend Time on Read: {blogList.readTime}
        </h5>
      </div>
      <div className='bookmarkBg p-3 shadow-sm'>
        <h4 className='fw-bold '>Bookmarked Blogs: {mainBlog.length }</h4>
        {
          mainBlog.map((blogs)=> {  
            
              return <p className='bg-light p-2 rounded-3 fw-bold blogText'> {blogs.blogTitle}</p>  
          })
        }
      </div>
    </div>
  );
};

export default Bookmark;
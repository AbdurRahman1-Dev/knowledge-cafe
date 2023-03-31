import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blog = () => {
 let [blogs, setBlogs] = useState([])

 useEffect(()=>{
  fetch('../../../public/knowledgeCafe.json')
  .then(res => res.json())
  .then(data => setBlogs(data))
 },[])



  return (
    <div className='mx-auto'>
  
        {
          blogs.map((blog) => {
            let {id, authorName, authorImage, blogTitle, cover, readTime, publishDate} = blog;
            console.log(blog)

            return (
              <Card className='w-50 border-0 my-3'>
              <Card.Img variant="top" src={cover} />
              <Card.Body>
                <div className="user-sec d-flex justify-content-between align-items-center">
                  <div className="user d-flex">
                    <img style={{width: '70px', height:'70px', borderRadius: '50%'}} src={authorImage} alt="" />
                   <div className="user-name px-2">
                   <h4 className='fw-bold'>{authorName}</h4>
                    <p style={{color:'gray'}}>{publishDate} (4days ago)</p>
                   </div>
                  </div>
                  <div className="time">
                    <p style={{color:'gray'}}>0{readTime} min read <span><FontAwesomeIcon icon={faBookmark} /></span></p>
                  </div>
                </div>
                <Card.Title className='fs-3 fw-bold py-3 lh-base'>{blogTitle}</Card.Title>
                <p style={{color:'gray'}}><span >#beginners</span> 
                <span className='px-4'>#programming</span></p>
                <Button variant="" className='link-primary text-decoration-underline'>Mark as read</Button>
              </Card.Body>
              <hr />
            </Card>
            )
          })
        }

    </div>
  );
};

export default Blog;

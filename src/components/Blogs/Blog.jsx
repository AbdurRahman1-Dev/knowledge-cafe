import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blog = ({handleBookMark,handleReadTime}) => {
 let [blogs, setBlogs] = useState([])

 useEffect(()=>{
  fetch('../../../public/knowledgeCafe.json')
  .then(res => res.json())
  .then(data => setBlogs(data))
 },[])


  return (
    <div className='left-card'>
  
        {
          blogs.map((blog) => {
            let {id, authorName, authorImage, blogTitle, cover, readTime, publishDate} = blog;

            return (
              <Card className=' border-0 my-3'>
              <Card.Img variant="top" src={cover} />
              <Card.Body>
                <div className="user-sec d-flex justify-content-between align-items-center">
                  <div className="user d-flex">
                    <img style={{width: '60px', height:'60px', borderRadius: '50%'}} src={authorImage} alt="" />
                   <div className="user-name px-2">
                   <h5 className='fw-bold'>{authorName}</h5>
                    <p style={{color:'gray'}}>{publishDate} (4days ago)</p>
                   </div>
                  </div>
                  <div className="time">
                    <p style={{color:'gray'}}>0{readTime} min read <span style={{cursor:'pointer'}} onClick={()=>handleBookMark(blog)}><FontAwesomeIcon icon={faBookmark} /></span></p>
                  </div>
                </div>
                <Card.Title className='fs-3 fw-bold py-3 lh-base'>{blogTitle}</Card.Title>
                <p style={{color:'gray'}}><span >#beginners</span> 
                <span className='px-4'>#programming</span></p>
                <Button onClick={()=>handleReadTime(blog)} variant="" className='link-primary text-decoration-underline'>Mark as read</Button>
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

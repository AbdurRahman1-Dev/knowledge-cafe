import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
 let [blogs, setBlogs] = useState([])

 useEffect(()=>{
  fetch('../../../public/knowledgeCafe.json')
  .then(res => res.json())
  .then(data => console.log(data))
 },[])


  return (
    <div className='mx-auto'>
     <Card className='w-50 '>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Blog;

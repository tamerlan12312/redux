import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const SingleCard = ({photo,title,desc,price,id}) => {
  return (
   <>
   
   <Col sm={6} md={4}>
   <Card style={{ height: 'auto',width:"250px" }} >
      <Card.Img variant="top" src={photo}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
        {desc.substring(0,50)}...
        </Card.Text>
    <Link to={`/blogs/${id}`}>
    <Button variant="primary">Read More</Button>
    </Link>
      </Card.Body>
    </Card>
   </Col>
   </>
  )
}

export default SingleCard
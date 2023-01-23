import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { Col } from 'react-bootstrap'
import { addBlog } from '../../../action/blogAction'
import { connect } from 'react-redux'

const BlogAdd = (props) => {
  return (
   <>
    <div>
      <h1 className='text-center mt-3'>Add Blog</h1>
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={4}>
     <BlogForm
       onFormSubmit={b=>{
        props.dispatch(addBlog(b)) ;
        props.history.push("/admin")
       }}
     />
      </Col>
     </div>
    </div>
   </>
  )
}



export default connect()(BlogAdd)
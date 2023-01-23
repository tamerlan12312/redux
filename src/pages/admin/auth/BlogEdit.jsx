import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../action/blogAction'
import BlogForm from '../../../components/BlogForm'
// import { editBlog } from '../../../action/blogAction'

const BlogEdit = (props) => {
  return (
   <>
   <div>
      <h1 className='text-center mt-3'>Edit Blog</h1>
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={4}>
     <BlogForm   editblog={props.apivalue}
     onFormSubmit={a=>{
      props.dispatch(editBlog(props.apivalue.id,a))
      props.history.push("/admin")
     }}
     />
      <button className="btn btn-secondary mt-2" onClick={()=>{
         props.dispatch(removeBlog({id:props.apivalue.id}))
         props.history.push("/admin")
      }}><strong>DELETE</strong></button>
      </Col>
     </div>
    </div>
   </>
  )
}

const mapStateToProps =(state,props)=>{
  return {
      apivalue:state.find(a=>{
        return a.id === props.match.params.id
      })
  }
}


export default connect(mapStateToProps)(BlogEdit)
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';





class BlogForm extends Component{
 
constructor (props){
  super(props) ;
  this.state ={
    formimg   :  props.editblog ? props.editblog.img    : "",
    formtitle :  props.editblog ? props.editblog.title  : "",
    formdesc  :  props.editblog ? props.editblog.desc   : "",
    formprice :  props.editblog ? props.editblog.price  : "",
  }
}


changeImg =e=>{
  const formimg = e.target.value

  this.setState(()=>({formimg}))
}

changeTitle =e=>{
  const formtitle = e.target.value

  this.setState(()=>({formtitle}))
}

changeDesc =e=>{
  const formdesc = e.target.value

  this.setState(()=>({formdesc}))
}

changePrice =e=>{
  const formprice = e.target.value

  this.setState(()=>({formprice}))
}


formSubmit =(e)=>{
  e.preventDefault()
   if(!this.state.formimg || !this.state.formtitle || !this.state.formdesc || !this.state.formprice) 
   {
      alert("Please Fill Input")
   }  else

   {
    this.props.onFormSubmit ({
      img   : this.state.formimg,
      title : this.state.formtitle,
      desc  : this.state.formdesc,
      price : this.state.formprice
    })
   }
}

  render(){
    return (
      <>
      <Form  onSubmit={this.formSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Blog photo</Form.Label>
          <Form.Control type="text" placeholder="Enter photo url" 

          onChange={this.changeImg}

          value={this.state.formimg}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Blog title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" 

          
          onChange={this.changeTitle}

          value={this.state.formtitle}
          />
      
        </Form.Group>
  

      
        <Form.Group className="mb-3" >
          <Form.Label>Blog description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Enter description">
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
          
          onChange={this.changeDesc}

          value={this.state.formdesc}
        />
      </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Blog Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" 

onChange={this.changePrice}

value={this.state.formprice}
          />
      
        </Form.Group>
        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form> 
      </>
    )
  }
}




export default BlogForm
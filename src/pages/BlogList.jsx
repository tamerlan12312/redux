import React from 'react'
import SingleCard from '../components/SingleCard'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import RingLoader from "react-spinners/RingLoader";
import "../sass/style.css"

const BlogList = props => {

const [loading,setLoading] = useState(false)
  
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},2000)

},[])

  return (
   <>
   
<Container className='mt-5'>
  {
    loading  ?
<div className="box">
<RingLoader
    color={"#fff"}
    loading={loading}
    aria-label="RingLoader"
    data-testid="loader"
    size={100}
    
  />
</div>

    :

<Row className='g-3' >
  <h1 align="text-center">Assasins's Creed</h1>

{
   props.apivalue.map((fd,i)=>{
    return <SingleCard 
    title={fd.title}
     key={i}
      photo={fd.img} 
      desc={fd.desc} 
      price={fd.price}
      id={fd.id}
      />
       
    })

}

</Row>
  }
  
   </Container>
   </>
  )
}

const mapStateToProps =(state)=>{
  return {
    apivalue:state
  }
}

export default connect(mapStateToProps)(BlogList)
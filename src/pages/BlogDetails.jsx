import React from 'react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import BarLoader from "react-spinners/BarLoader";
import "../sass/style.css"


const BlogDetails = props => {

  const [loader,setLoader]=useState(false)

  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },2000)
  },[])

  return (
    <>
    

    {
      loader ?
      <div className="box2">
<BarLoader
    color={"black"}
    loading={loader}
    aria-label="BarLoader"
    data-testid="loader"
    size={100}
    
  />
</div>

 :
 <div className="container col-xxl-8 px-4 py-5">
 <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
   <div className="col-10 col-sm-8 col-lg-6">
     <img src={props.apivalue.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
   </div>
   <div className="col-lg-6">
     <h1 className="display-5 fw-bold lh-1 mb-3">{props.apivalue.title}</h1>
     <p className="lead">{props.apivalue.desc}</p>
     <h1 className="display-5 fw-bold lh-1 mb-3">{props.apivalue.price}</h1>
     <div className="d-grid gap-2 d-md-flex justify-content-md-start">
       <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
       <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
     </div>
   </div>
 </div>
</div>

    }


    </>
  )
}

const mapStateToProps=(state,props)=>{
  return {
    apivalue:state.find(q=>{
      return q.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(BlogDetails)
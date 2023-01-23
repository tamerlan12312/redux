import React from 'react'
import { useEffect, useState } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import "../../sass/style.css"
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Dashboard = props => {
const [loading2,setLoading2] = useState(false)

useEffect(()=>{
setLoading2(true)
setTimeout(()=>{
    setLoading2(false)
},2000)
},[])

  return (
    <>
    
 {
    loading2 ?
    <div className="box2">
<SyncLoader
  color={"white"}
  loading={loading2}
  aria-label="SyncLoader"
  data-testid="loader"
  size={25}
  
/>
</div>
:

<div className="gradient">
<Container >
    <h1 className='pt-3 '>WELCOME :) </h1>
<Table striped bordered hover >
<thead>
  <tr>
    <th>#</th>
    <th>Blog Photo</th>
    <th>Blog Title</th>
    <th>Blog Description</th>
    <th>Price</th>
    <th>Edit</th>
    <th>Add</th>
  </tr>
</thead>
<tbody>

{
    props.apivalue.map((fd,i)=>(

  <tr key={i}>
    <td>{i+1}</td>
    <td><img src={fd.img} alt="" width="60px" /></td>
    <td>{fd.title}</td>
    <td>{fd.desc.substring(0,280)}</td>
    <td><strong>{fd.price}</strong></td>
    <td><strong>
      <Link to={`/edit/${fd.id}`}>
    <button className="btn btn-outline-primary"><i class="fa-regular fa-pen-to-square"></i></button>
    </Link></strong></td>
    <td><strong>
        <Link to="/add">
        <button className="btn btn-outline-success"><i class="fa-regular fa-address-card"></i></button>
        </Link>
        </strong></td>
  </tr>

    ))
}

</tbody>
</Table>
</Container>

</div>





 }
    
    </>
  )
}

const mapStateToProps =(state)=>{
    return {
        apivalue:state
    }
}

export default connect(mapStateToProps)(Dashboard)
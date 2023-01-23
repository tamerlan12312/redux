import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
   <>
  
  <Navbar bg="dark navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand >
            <Link to="/" style={{"text-decoration":"none"}}>BLOG</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link >
                <NavLink to="/" style={{"text-decoration":"none"}}>Home</NavLink>
                </Nav.Link>
            <Nav.Link >
                <NavLink to="/blogs" style={{"text-decoration":"none"}}> Blog List</NavLink>
               </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       <Link to="/login">
       <button className='btn btn-outline-success '>LOGIN
        <i class="fa-solid fa-arrow-right-to-bracket ms-1"></i>
        </button>
       </Link>
      </Container>
    </Navbar>


   
   
   </>
  )
}

export default Header
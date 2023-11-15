import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
    <div><Navbar className="bg-dark">
    <Container>
      <Navbar.Brand  className='fs-2' href="#home"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Project Fiar</Link></Navbar.Brand>
      { insideDashboard && <div style={{textDecoration:'none',color:'white'}} className='btn btn-link ms-auto tet-info '>Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></div> }
    </Container>
  </Navbar></div>
  )
}

export default Header
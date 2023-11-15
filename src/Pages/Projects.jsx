import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'


function Projects() {
  return (
    <div>
      <Header/>
     <div className='mb-5' style={{marginTop:'100px'}}>
        <h3 className='text-center mb-5'>All Projects</h3>
    <div className='d-flex justify-content-center align-items-center w-100'>
      <div className='d-flex border w-50 rounded'>
        <input type="text" className='form-control' placeholder='search here....' />
        
      </div>
      <i style={{marginLeft:'-40px'}} className="fa-solid fa-magnifying-glass fa-2xl btn"></i>
    </div>
     </div>
     <Row className='mt-5 container-fluid'>
      <Col sm={12} md={6} lg={4}>
      <ProjectCard/>
      </Col>
     </Row>
    </div>
  )
}

export default Projects
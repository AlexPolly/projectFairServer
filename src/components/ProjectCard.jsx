import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import cardimg from '../Assets/foodgallery.png'



function ProjectCard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card className='shadow btn mt-5 mb-5 w-60'onClick={handleShow} >
      <Card.Img   variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
            <Col md={6}>
            <img style={{height:'200px'}} className='img-fluid' src={cardimg} alt="" />
            </Col>
            <Col md={6}>
            <h2>Project title</h2>
            <p style={{color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde ex iste sed placeat tenetur nihil consequuntur dolorum </p>

            </Col>
         </Row>
         <div className='mt-3'>
         <a href='https://github.com/sivagithub4442/projectfair.git' className='me-3 btn'><i class="fa-brands fa-github"></i></a>
         <a href=''><i class="fa-solid fa-link"></i></a>
         </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard
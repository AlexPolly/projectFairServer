import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProjects() {
    const [show, setShow] = useState(false);
    const [projectsDetails,setProjectsDetails] = useState({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className="col-lg-6">
                <label>
                    <input type="file" style={{display:'none'}} />
                    <img className='img-fluid' src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png" alt="" /></label>
            </div>
            <div className="col-lg-6">
                <div className="mb-3"> <input type="text" className='form-control' placeholder='Project Title' /></div>
                <div className="mb-3"> <input type="text" className='form-control' placeholder='Language Used' /></div>
                <div className="mb-3"> <input type="text" className='form-control' placeholder='GitHub Link' /></div>
                <div className="mb-3"> <input type="text" className='form-control' placeholder='Project Overview' /></div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects
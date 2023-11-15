import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../Assets/bgimg.jpg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom';


function Home() {
  const [loggedin, setLoggedin] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedin(true)
    } else {
      setLoggedin(false)
    }
  }, [])
  return (
    <>
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#F6FDC3' }} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '85px', textShadow: '2px 2px 4px #ff0000', overflowY: "hidden" }} className='text-light fw-bolder'>Project Fair</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia soluta deleniti facere illo, veniam dolores delectus iusto earum vero, corporis beatae maxime ipsam aliquam optio vitae. Molestiae, odit iusto!</p>

            {  loggedin?  
             <Link to={'/dashboard'} className='btn btn-warning'>Manage your Projects </Link>:
            <Link to={'/login'} className='btn btn-warning'>Start to Explore </Link>
            }

          </Col>
          <Col>
            <img className='w-75 ' style={{ marginTop: '50px', marginLeft: "50px" }} src={titleimage} alt="" />
          </Col>
        </Row>
      </div>
      <div className='all-projects mt-5'>
        <h2 className='text-center'>Explore Our Projects</h2>
        <marquee scrollAmount={25} >
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>

          </Row>
        </marquee>
        <div className='text-center mt-5'>
          <Link className='btn btn-success' to={'/projects'}>View More</Link>
        </div>
      </div>
    </>
  )
}

export default Home
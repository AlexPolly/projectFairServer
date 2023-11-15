import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'



function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
        <h2 className='mb-3'>Welcome <span className='text-warning m'>{username}</span></h2>
          {/* my project */}
          <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
          {/* my profile */}
          <Profile/>
        </Col>

      </Row>
    </>
  )
}

export default Dashboard
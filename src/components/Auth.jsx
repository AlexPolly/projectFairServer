import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../Assets/login.png'
import { Form } from 'react-bootstrap'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Auth({register}) {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })
  const isRegister = register?true:false

  const handleRegister = async (e) =>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      const result = await registerAPI(userData)
      if(result.status===200){
        toast.success(`${result.data.username} has regiterd successfully!!! `)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/login')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }

  const handleLogin = async (e) =>{
    e.preventDefault()
    const {email,password} = userData
    if( !email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      const result = await loginAPI(userData)
      if(result.status===200){
        // toast.success(`${result.data.username} has regiterd successfully!!! `)
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setUserData({
          email:"",password:""
        })
        navigate('/')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
            <Link to={'/'} style={{textDecoration:'none'}}>Back to home</Link>
            <div className='card shadow p-5 bg-info '>
                <div className='row align-items-center'>
                    <div className="col-lg-6">
                        <img src={login} className='rounded-start w-100' alt="" />
                    </div>
                
                <div className="col-lg-6">
                    <div className='d-flex align-items-center flex-column'>
                        <h4 className='fw-bolder text-light mb-3'>Project Fair</h4>
                        <h6 className='fw-bolder mt-1 pb-3 text-light'>
                           {
                           isRegister ? 'Sign Up to your Account':'Sign in to your Account'
                           }
                        </h6>
                        <Form className='text-light w-100'>
                            {
                                isRegister && 
                                <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                                
                              </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                                
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                                
                              </Form.Group>
                              {
                                isRegister ? 
                                <div>
                                    <button onClick={handleRegister} className='btn btn-success'>Register</button>
                                    <p>Already have Account? click here <Link className='text-danger' to={'/login'}>Login</Link></p>
                                </div> 
                                :
                                <div>
                                    <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                                    <p>New User? Click here to <Link  className='text-danger' to={'/register'}>Register</Link></p>
                                </div>
                              }
                        </Form>
                    </div>
    
                </div>
                </div>
            </div>
        </div>
        <ToastContainer theme='colored' />
    </div>
  )
}

export default Auth
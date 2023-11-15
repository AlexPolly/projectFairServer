import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className=' p-5 shadow'>
        <div  className='d-flex justify-content-between' >
        <h2 >My Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-info px-3 shadow'>  <i class="fa-solid fa-caret-down"></i></button>
        </div>
       <Collapse in={open}>
          <div>
                <div className='row justify-content-center mt-3'>
                    <label className='text-center' >
                        <input style={{display:'none'}} type="file" />
                        <img width={'200px'} height={'200px'} className='rounded-circle' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="upload picture" />
                    </label>
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='GitHub Link' />
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='Linkedin Link' />
                </div>
                <div className='mt-3'>
                    <button style={{width:'380px'}} className='btn btn-warning '>Update</button>
                </div>
          </div>
       </Collapse>
    </div>
    </>
  )
}

export default Profile
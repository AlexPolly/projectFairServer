import React from 'react'
import AddProjects from './AddProjects'

function MyProjects() {
  return (
    <>
     <div className='card p-5 shadow'>
        <div className='d-flex justify-content-between'>
            <h3>My Projects</h3>
            <div className=''> <AddProjects/></div>
        </div>
        <div className='mt-4'>
            {/* collection of user projects */}
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className="icon ms-auto">
                    <button className=' rounded p-1 me-3'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
                    <button className=' rounded p-1 me-3'><i className="fa-brands fa-github fa-2x"></i></button>
                    <button className='rounded p-1 me-3'><i class="fa-solid fa-trash fa-2x"></i></button>
                </div>
            </div>
            <p className='text-danger fw-bolder fs-5'> No Projects Uploaded Yet!!!</p>
        </div>
     </div>
    </>
  )
}

export default MyProjects
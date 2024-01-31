import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
    <div className='container '>
        <div className='d-flex mt-5'>
            <h3 className=''>My Projects</h3>
            <div className='ms-auto'>
            <AddProject/>
            {/* Add Project Component */}
            </div>
        </div>

        <div className='d-flex  my-5 align-items-center justify-content-between border p-3'>
            <h4>Project Title</h4>
            <div >
                <button className='btn'><i className='fa-solid fa-pen'></i></button>
                <button className='btn'><i className='fa-brands fa-github'></i></button>
                <button className='btn'><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
    </div>
  )
}

export default MyProject
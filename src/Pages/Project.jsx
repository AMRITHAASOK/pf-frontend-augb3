import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../Components/ProjectCard';
function Project() {
  return (
    <div>
      <div className="container">
        <h2 className='text-center m-4'>All Projects</h2>
        <div className='d-flex justify-content-center w-100'>
            <div className='d-flex rounded mb-5 w-50'>
              <input type="text" placeholder='Search By technology' className='form-control'/>
              <i style={{marginLeft:'-30px'}} class="fs-3 mt-1 me-5  fa-solid fa-magnifying-glass"></i>
            </div>
      </div>
      <Row>
            <Col>
              <ProjectCard/>
              </Col>
      </Row>
      </div>
    </div>
  )
}

export default Project
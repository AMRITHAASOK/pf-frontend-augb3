import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyProject from '../Components/MyProject';
import MyProfile from '../Components/MyProfile';
function Dashboard() {

  const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
  console.log(existingUser);
  return (
    <div className='m-5'>
      <div className='m-5'>
        <Row>
          <h2 className='m-5'>Welcome <span className='text-primary'>{existingUser.username}</span></h2>
          <Col>
          {/* My Projects */}
          <MyProject/>
          </Col>
          <Col>
          {/* My profile */}
          <MyProfile/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
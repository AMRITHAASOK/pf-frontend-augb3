import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/WWW-Website-PNG-Photos (1).png'
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div> 
    <Card onClick={handleShow} style={{ width: '18rem' }} className='mb-5'>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title className='text-center'>Project Title</Card.Title>
    </Card.Body>
  </Card>
  


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <img src={img} width={'100%'} alt="" />
                </Col>
                <Col>
                <h3>Project Title</h3>
                <p> <span><b>Project Overview</b></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis neque pariatur perspiciatis id delectus.</p>
                <p>Technology Used : <span><b>React Node Express MongoDB</b></span></p>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <a href='' variant="secondary text-dark" onClick={handleClose}>
          <i class="fa-brands fa-github  text-white fs-2 fa-beat-fade"></i>
          </a>
          <a href='' variant="primary" onClick={handleClose}>
          <i class="fa-solid fa-link text-white fs-2 fa-fade"></i>
          </a>
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default ProjectCard
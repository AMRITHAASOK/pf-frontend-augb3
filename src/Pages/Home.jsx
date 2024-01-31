import React from 'react'
import TitleImage from '../assets/WWW-Website-PNG-Photos (1).png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../Components/ProjectCard';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    {/* content */}
                    <h1 className='text-center m-4 '>Project Fair</h1>
                    <p style={{textAlign:'justify'}}>Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people.The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.</p>
                    <div className='text-center'>
                        <Link to={'/login'}>
                        <button className='btn btn-dark btn-lg px-5 text-white rounded-pill shadow m-4 '>Get started</button>
                        </Link>
                    </div>
                </div>
                <div className="col-6">
                    {/* image */}
                    <img src={TitleImage} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className='text-center m-4'>Explore Projects</h2>
                    <marquee >
                        <Row>
                            <Col>
                            <ProjectCard/>
                            </Col>
                            <Col>
                            <ProjectCard/>
                            </Col>
                            <Col>
                            <ProjectCard/>
                            </Col>
                        </Row>
                    </marquee>
                </div>
            </div>

            <Link to={'/project'}>
            <div className='text-center'>
                <button className='btn btn-dark btn-lg px-5 text-white rounded-pill shadow m-5 '>View Projects</button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='dark' className='text-white'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-white'>
          <i class="fa-solid fa-laptop-code fa-fad mx-3 fs-1 text-white"></i>
          Prject Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar></div>
  )
}

export default Header
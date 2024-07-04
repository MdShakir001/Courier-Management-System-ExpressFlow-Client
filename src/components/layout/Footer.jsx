import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from 'react-icons/fa'
const footer = () => {
  return (
    <footer className='text-white ml-0 mr-0 p-3' style={{ background: 'black',
    opacity: '0.8',bottom:0}}>
    
    <Container>
    <Row>
      <Col lg={4}>
        <h5>Express Flow</h5>
        <p>123 Courier Street</p>
        <p>City, State ZIP</p>
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
      </Col>
      <Col lg={4}>
        <h5>Services</h5>
        <ul className="list-unstyled">
          <li>Express Delivery</li>
          <li>Same-Day Delivery</li>
          <li>International Shipping</li>
        </ul>
      </Col>
      <Col lg={4}>
        <h5>Follow Us</h5>
        <p>Stay connected with us on social media</p>
        <ul className="list-inline">
          
          <li className="list-inline-item">
             <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><FaFacebook/></a></li>
             <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><FaInstagram/></a>

                  </li>
              <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><FaTwitter/></a>

                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize:"23px"}}><FaLinkedin/></a>

                            </li>
        </ul>
      </Col>
    </Row>
    <hr className="mt-4" />
    <Row>
      <Col>
        <p className="text-center">© 2024 Express Flow All rights reserved |Shakir Technologies PVT.LTD  </p>
      </Col>
    </Row>
  </Container>

</footer>
  )
}

export default footer

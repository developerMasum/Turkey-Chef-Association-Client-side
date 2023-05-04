
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bgcolor container py-2 px-3 mt-5 mb-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>Here, you will find all of  bests of best chef in Turkey. Their Recipe also here found . hope, Enjoy it</p>
          </Col>
          <Col md={3}>
            <h5>Countries</h5>
            <ul className="list-unstyled ">
              <li><a className='text-decoration-none text-black' href="#">Turkey</a></li>
              <li><a className='text-decoration-none text-black' href="#">Bangladesh</a></li>
              <li><a className='text-decoration-none text-black' href="#">Pakistan</a></li>
              <li><a className='text-decoration-none text-black' href="#">Japan</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a className='text-decoration-none text-black' href="#">Privacy Policy</a></li>
              <li><a className='text-decoration-none text-black' href="#">Terms of Use</a></li>
              <li><a className='text-decoration-none text-black' href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a className='text-decoration-none text-black' href="#"> <FaFacebook /> Facebook</a></li>
              <li><a className='text-decoration-none text-black' href="#"><FaTwitter /> Twitter</a></li>
              <li><a className='text-decoration-none text-black' href="#"><FaInstagram/>  Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-muted">&copy; 2023 Turkey Chef Association. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;


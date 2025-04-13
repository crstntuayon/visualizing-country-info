import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import your CSS file for styling

function Footer({ className }) {
  return (
    <footer className={`text-light mt-5 ${className}`}>
      <Container >
        <Row className="text-center text-md-left">
          <Col md={6}>
            
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#privacy" className="text-light me-1"> &copy; {new Date().getFullYear()} Cres Tuayon  | </a>
            <a href="#privacy" className="text-light me-3">Privacy Policy</a>
            <a href="#terms" className="text-light">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
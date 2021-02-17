import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row className="text-center p-2">
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-light">
              Drone Shop
            </h6>
            <p>Drone Shop sells the best rated products you can get!</p>
          </Col>
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-light">
              Useful Links
            </h6>
            <p>
              <Link className="text-light" to="/profile">
                Your Profile
              </Link>
            </p>
            <p>
              <Link className="text-light" to="/cart">
                Your Cart
              </Link>
            </p>
            <p>
              <Link className="text-light" to="/login">
                Login
              </Link>
            </p>
            <p>
              <Link className="text-light" to="/register">
                Sign Up
              </Link>
            </p>
          </Col>
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-light">
              Contact Us
            </h6>
            <p>
              <i className="fas fa-home"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href={`mailto: droneshop@example.com`} className="text-light">
                droneshop@example.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone"></i> + 555-555-555
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; @ ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

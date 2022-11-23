import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="http://www.linkedin.com/in/benholgate/"><img src={navIcon1} alt="" /></a>
                <a href="http://github.com/holgateb"><img src={navIcon2} alt="" /></a>
              </div>
            <p>Thank you for your time</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
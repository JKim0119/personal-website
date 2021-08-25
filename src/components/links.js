import React from "react";
import "./components.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import resume from "../forms/resume.pdf";

const Links = () => {
  return (
    <div>
      <Container className="container-link-top" fluid>
        <Row className="icon-line"></Row>
        <Row className="icon">
          <Col></Col>
          <Col xs="auto">
            <a href="mailto:jacobkim0119@gmail.com"><FaEnvelope /></a>
          </Col>
        </Row>
        <Row className="icon">
          <Col></Col>
          <Col xs="auto">
            <a href="https://github.com/JKim0119" target="_blank">
              <FaGithub />
            </a>
          </Col>
        </Row>
        <Row className="icon">
          <Col></Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/JKim0119" target="_blank">
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="container-link-bottom" fluid>
        <Row className="icon">
          <Col xs="auto">
            <div className="vertical-text">
              <a href={resume} target="_blank">
                Resume
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className="resume-line"></Row>
      </Container>
    </div>
    // <div>
    //   <div className="links"></div>
    //   <div className="icon-list">

    //     <FaLinkedin />
    //     <FaLinkedin />
    //   </div>
    // </div>
  );
};

export default Links;

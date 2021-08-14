import React from "react";
import "./components.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import proPic from "../images/profile_photo.jpeg";

const Welcome = () => {
  return (
    <Container className="section welcome" fluid>
      <Row className="justify-content-between align-items-center">
        <Col xs="1"></Col>
        <Col xs="12" md="10">
          <h1 className="text-center silver nameSize shadoww">Jacob Kim</h1>
          <div className="text-center silver fontChange shadoww">Software Engineer</div>
        </Col>
        <Col xs="1"></Col>
      </Row>
    </Container>
  );
};

export default Welcome;

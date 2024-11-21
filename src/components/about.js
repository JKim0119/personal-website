import React from "react";
import "./components.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import proPic from "../images/profile_photo.jpeg";

const About = () => {
  return (
    <Container className="section" fluid>
      <Row className="justify-content-between align-items-center flex-md-row flex-column-reverse">
        <Col></Col>
        <Col xs="11" md="6">
          <Row>
            <Col xs="12" className="silver">
              <h2>
                01. About Me
                <hr />
              </h2>
              <div className="aboutMe-text__container">
                <h6>
                  Hello! My name is Jacob and I am a full stack software
                  engineer based out of Chicago.
                </h6>
                <h6>
                  Since I can remember, I've always had a passion for problem
                  solving and creative thinking. Once I was introduced to
                  programming, I was immediately hooked and loved creating things to solve problems.
                </h6>
                <h6>Feel free to reach out for any cool opportunities, my inbox <a href="mailto:jacobkim0119@gmail.com">(jacobkim0119@gmail.com)</a> is always open.</h6>
                <h4>Technologies</h4>
                <Row>
                  <Col xs="6" md="4">
                    <h6>○ Java/Spring</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ JS/React</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ C#/.NET</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ Python</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ AWS</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ Git</h6>
                  </Col>
                  <Col xs="6" md="4">
                    <h6>○ MSSQL</h6>
                  </Col>
                  <Col>
                    <h6>○ PostgreSQL</h6>
                  </Col>
                  <Col>
                    <h6>○ Firebase</h6>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs="11" md="4">
          <p></p>
          <Image src={proPic} className="rounded " fluid />
          <p></p>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default About;

import React from "react";
import "./components.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import alley from "../images/alley.png";
import corona from "../images/corona.png";
import footwork from "../images/footwork.png";

const Projects = () => {
  return (
    <Container className="section" fluid>
      <Row>
        <Col></Col>
        <Col xs="10" md="9" className="silver">
          <h2>
            03. Some things I built
            <hr />
          </h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="project" md="3">
          <p></p>
          <a href="https://apps.apple.com/us/app/alley-find-tennis-partners/id1551859722" target="_blank" className="hovereffect">
            <Image src={alley} className="rounded " fluid />
            <a href="https://apps.apple.com/us/app/alley-find-tennis-partners/id1551859722" target="_blank" className="overlay">
              <h2>Alley</h2>
              <p>
                An iOS App to find other similarly skilled tennis players nearby.
              </p>
              <p>
                SwiftUI • Spring • PostgreSQL
              </p>
            </a>
          </a>
          <p></p>
        </Col>
        <Col className="project" md="3">
          <p></p>
          <a href="https://ilcorona.com" target="_blank" className="hovereffect">
            <Image src={corona} className="rounded " fluid />
            <a href="https://ilcorona.com" target="_blank" className="overlay">
              <h2>IL Covid-19 Dashboard</h2>
              <p>
                A simple dashboard to view some stats of Covid-19 cases in Illinois. 
              </p>
              <p>
                ReactJS • AWS Lambda • DynamoDB
              </p>
            </a>
          </a>
          <p></p>
        </Col>
        <Col className="project" md="3">
          <p></p>
          <a href="https://play.google.com/store/apps/details?id=jyk.footwork&hl=en_US&gl=US" target="_blank" className="hovereffect">
            <Image src={footwork} className="rounded " fluid />
            <a href="https://play.google.com/store/apps/details?id=jyk.footwork&hl=en_US&gl=US" target="_blank" className="overlay">
              <h2>Footwork</h2>
              <p>
                An Android App to help shadow the footwork done in actual tennis points.
              </p>
              <p>
                Android (Java)
              </p>
            </a>
          </a>
          <p></p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Projects;

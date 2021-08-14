import React from "react";
import "./components.css";
import { Container, Row, Col, Card, Image, Tab, Nav } from "react-bootstrap";

const Experience = () => {
  return (
    <Container className="section pacific-blue" fluid>
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col></Col>
          <Col xs="10" md="7">
            <h2>
              02. Where I've Worked
              <hr />
            </h2>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="10" md="7">
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="first">Alley</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Allstate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">IBM</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="10" md="7">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Co-Founder & CTO
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Jan 2021 - Present
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Worked with one partner to modernize tennis and create a
                      platform that makes it easy to find, interact, and compete
                      with similarly skilled players around you
                    </Card.Text>
                    <Card.Text>
                      ○ Solely developed the entire frontend and backend of the product. Co-designed the product with partner
                    </Card.Text>
                    <Card.Text>
                      ○ Continuously implemented new features and fixed bugs to the 500+ users
                    </Card.Text>
                    <Card.Text>
                      ○ Utilizied technologies such as: Java/Spring, Swift/SwiftUI, Firebase, Websockets, AWS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Full Stack Software Engineer
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Sep 2019 - Jan 2021
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Developed an internal product to provide secure
                      application deployment across the enterprise
                    </Card.Text>
                    <Card.Text>
                      ○ Simplified security across the enterprise by providing
                      an internal scanning tool that integrates with security
                      applications from third-party vendors
                    </Card.Text>
                    <Card.Text>
                      ○ Built using the technologies: Java/Spring, React/JS,
                      MSSQL, Kubernetes
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Physical Design Engineer & Programmer
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Jul 2018 - Sep 2019
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Optimized circuit design using Cadence and IBM tools to
                      improve timing of chip from 5 GHz to 5.4 GHz
                    </Card.Text>
                    <Card.Text>
                      ○ Saved more than 10% for run time on simulations of chip
                      design by analyzing previous chip data using Python and
                      providing better inputs
                    </Card.Text>
                    <Card.Text>
                      ○ Provided insight on the current state of chip to
                      management by creating visuals of the chip data using
                      Python
                    </Card.Text>
                    <Card.Text>
                      ○ Mentored an intern on a project for data visualization
                      and organizing simulated chip data using mongoDB
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col></Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Experience;

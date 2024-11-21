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
                <Nav.Link eventKey="first">Adyen</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Docusign</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Alley</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Allstate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">IBM</Nav.Link>
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
                      Software Engineer II
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      April 2024 - Present
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Led the development of an integration to allow money transfers in Icelandic Krona
                    </Card.Text>
                    <Card.Text>
                      ○ Contributed to the U.S payment rails, processing over $1 billion in daily transfers per day
                    </Card.Text>
                    <Card.Text>
                      ○ Designed and implemented Confirmation Of Payee integration, imrpoving fraud prevention and payment accuracy
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Software Engineer II
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Nov 2021 - April 2024
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Enhanced user satisfaction by implementing real-time sorting for search 
                      results and introducing advanced filtering options for reporting, 
                      resulting in improved user engagement
                    </Card.Text>
                    <Card.Text>
                      ○ Led the development of a collection of specialized reports, 
                      utilizing document attributes and significantly improving data accessibility, 
                      which contributed to increased client retention
                    </Card.Text>
                    <Card.Text>
                      ○ Streamlined the integration of automation testing into multiple deployment pipelines, 
                      improving the bug-catching process and overall testing effectiveness
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Co-Founder & CTO
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Jan 2021 - Present
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Led the modernization of tennis by co-designing and developing a platform 
                      that connects and facilitates competition among players of similar skill levels, 
                      fostering a thriving community of over 500 users
                    </Card.Text>
                    <Card.Text>
                      ○ Utilized advanced technologies including Firebase for user authentication, 
                      Websockets for real-time chat, PostgreSQL for efficient data management, 
                      and AWS S3 for streamlined image storage to create a robust and responsive platform
                    </Card.Text>
                    <Card.Text>
                      ○ Managed agile development cycles, consistently delivering new features and 
                      addressing user-reported issues, resulting in a rapidly growing user base and 
                      high levels of user satisfaction
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Full Stack Software Engineer
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Sep 2019 - Jan 2021
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Designed and developed an in-house solution for secure application deployment 
                      across the enterprise, featuring a Java/Spring backend, ReactJS frontend, and MSSQL 
                      database to ensure robust and efficient deployment processes
                    </Card.Text>
                    <Card.Text>
                      ○ Streamlined enterprise-wide security by creating an internal scanning tool that 
                      seamlessly integrates with third-party security applications, enhancing overall 
                      security posture and reducing vulnerabilities
                    </Card.Text>
                    <Card.Text>
                      ○ Led the development of an image scanning microservice tool and orchestrated 
                      its deployment using Kubernetes, facilitating efficient and scalable image 
                      scanning capabilities within the organization
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Card>
                  <Card.Body>
                    <Card.Title className="rose-gold">
                      Physical Design Engineer & Programmer
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Jul 2018 - Sep 2019
                    </Card.Subtitle>
                    <Card.Text>
                      ○ Boosted efficiency by reducing simulation run times for chip design 
                      by over 10% through the analysis of historical chip data using Python 
                      and the provision of optimized inputs
                    </Card.Text>
                    <Card.Text>
                      ○ Mentored an intern in a data visualization project, 
                      focusing on the organization of simulated chip data using MongoDB, 
                      fostering skill development and knowledge transfer within the team
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

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SocialImpact.scss";
import { SlideInFromLeft } from "../../../utils/animations";

const SocialImpact = ({ id }) => {
  return (
    <div className="social-impact-container" id={id}>
      <SlideInFromLeft>
        <img
          src="/Assets/Containers/SocImpact/paper-doll.svg"
          alt=""
          className="paper-doll"
        />
        <img
          src="/Assets/Containers/SocImpact/ribbon.svg"
          alt=""
          className="ribbon"
        />
        <div className="d-flex align-items-center gap-2">
          <div className="blt-lg-red"></div>
          <h2>Social Impact</h2>
        </div>
        <h4>AMIT's scholarships create a positive social impact by:</h4>
      </SlideInFromLeft>
      <Container>
        <SlideInFromLeft>
          <Row>
            <Col md={{ span: 6 }}>
              <Card className="custom-card">
                <div className="red-square">1</div>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="blt-sm-turq"></div>
                    <Card.Title>Enhancing Accessibility:</Card.Title>
                  </div>
                  <Card.Text>
                    Breaking down financial barriers, making IT education
                    accessible to a diverse audience. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <Row className="mt-4">
            <Col md={{ span: 6, offset: 5 }}>
              <Card className="custom-card">
                <div className="red-square">2</div>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="blt-sm-turq"></div>

                    <Card.Title>Fostering Diversity:</Card.Title>
                  </div>
                  <Card.Text>
                    Promoting inclusivity in the tech community by empowering
                    individuals from varied backgrounds.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <Row className="mt-4">
            <Col md={{ span: 6, offset: 6 }}>
              <Card className="custom-card">
                <div className="red-square">3</div>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="blt-sm-turq"></div>
                    <Card.Title>Developing Skills</Card.Title>
                  </div>
                  <Card.Text>
                    Providing recipients with essential IT skills, contributing
                    to the overall workforce's capabilities. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <Row className="mt-4">
            <Col md={{ span: 6, offset: 5 }}>
              <Card className="custom-card">
                <div className="red-square">4</div>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="blt-sm-turq"></div>
                    <Card.Title>Facilitating Careers:</Card.Title>
                  </div>
                  <Card.Text>
                    Opening doors to promising IT career opportunities,
                    fostering economic empowerment. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <Row className="mt-4">
            <Col md={{ span: 6, offset: 1 }}>
              <Card className="custom-card">
                <div className="red-square">5</div>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="blt-sm-turq"></div>
                    <Card.Title>Building Community</Card.Title>
                  </div>
                  <Card.Text>
                    Connecting scholarship recipients in a supportive network
                    that extends beyond education. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SlideInFromLeft>
      </Container>
    </div>
  );
};

export default SocialImpact;

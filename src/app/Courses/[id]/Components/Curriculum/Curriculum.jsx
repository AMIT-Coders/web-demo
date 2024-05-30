"use client";
import TitleBlob from "../../../../Components/TitleBlob/TitleBlob";
import React, { useContext, useState } from "react";
import "./Curriculum.scss";
import { curriculumData } from "./curriculumData";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ApplyModal from "../../../../Components/ApplyModal/ApplyModal";

import { Accordion, Card, Col, Nav, Row, Tab } from "react-bootstrap/";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={
        isCurrentEventKey ? "accordion-selected" : "accordion-unselected"
      }
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Curriculum = ({ id, curriculum, courseId, currLink }) => {
  const [show, setShow] = useState(false);
  return (
    <div id={id}>
      {curriculum && (
        <>
          <ApplyModal
            show={show}
            setShow={setShow}
            formType="curr"
            title={`Curriculum Download - ${courseId}`}
            note="Curriculum download"
            curr={currLink}
          />
          <div className="curriculum" id={id}>
            <TitleBlob
              title="CURRICULUM"
              fontsize="28px"
              textalign="flex-start"
            />
            <br />
            <p className="subheader">What you will learn in this bootcamp</p>
            <Tab.Container id="left-tabs" defaultActiveKey="0">
              <Row className="tabs">
                <Col sm={5}>
                  <Nav
                    variant="pills"
                    className="flex-column"
                    style={{ gap: "16px" }}
                  >
                    {curriculum.map((item, id) => {
                      return (
                        <Nav.Item key={id}>
                          <Nav.Link eventKey={id}>
                            <div className="d-flex align-items-center gap-3 nav-item-container">
                              <img
                                src="/Assets/Courses/Curriculum/bullet.svg"
                                alt=""
                              />
                              <span className="nav-item-title">
                                {item.title}
                              </span>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
                <Col sm={7}>
                  <Tab.Content>
                    {curriculum.map((item, id) => {
                      return (
                        <Tab.Pane key={id} eventKey={id.toString()}>
                          <div className="bg">
                            <div className="d-flex align-items-center gap-2">
                              <div className="blt-red"></div>
                              <h3 style={{ margin: 0 }}>{item.title}</h3>
                            </div>

                            <br />

                            <ul>
                              {/* Map through each content item array and render them as separate paragraphs */}
                              {item.content.map((contentItem, index) => (
                                <li key={index}>{contentItem}</li>
                              ))}
                            </ul>
                          </div>
                        </Tab.Pane>
                      );
                    })}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <Accordion defaultActiveKey="0" className="my-4 faqs phone-curr">
              {curriculum &&
                curriculum.map((item, idx) => {
                  return (
                    <>
                      <Card key={item.idx}>
                        <Card.Header>
                          <ContextAwareToggle eventKey={idx.toString()}>
                            {item.title}
                          </ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={idx.toString()}>
                          <Card.Body>
                            <div className="bg">
                              <ul>
                                {/* Map through each content item array and render them as separate paragraphs */}
                                {item.content.map((contentItem, index) => (
                                  <li key={index}>{contentItem}</li>
                                ))}
                              </ul>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <br />
                    </>
                  );
                })}
            </Accordion>
            <br />
            {currLink && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => setShow(true)} className="primary-btn">
                  Download Full Curriculum
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Curriculum;

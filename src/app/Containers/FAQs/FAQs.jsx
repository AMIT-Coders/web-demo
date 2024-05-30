"use client";
import React from "react";
import "./FAQs.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import { useContext, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import axios from "axios";
import backend from "../../utils/backend";

import faqsdata from "./faqsdata";

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

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get(`${backend}/api/faqs`);
      setFaqs(response.data[0].faqs);
      // console.log(response.data[0].faqs);
    } catch (error) {
      console.error("Error fetching faqs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="faqs-section">
      <h2>All you need to know</h2>
      <TitleBlob
        title={"Frequently Asked Questions"}
        fontsize={"40px"}
        textalign={"flex-start"}
      />
      <Accordion defaultActiveKey="0" className="my-4 faqs">
        {faqs &&
          faqs.map((faq, idx) => {
            return (
              <div key={idx}>
                <Card>
                  <Card.Header>
                    <ContextAwareToggle eventKey={idx.toString()}>
                      {faq.title}
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={idx.toString()}>
                    <Card.Body>{faq.body}</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <br />
              </div>
            );
          })}
      </Accordion>
    </div>
  );
};

export default FAQs;

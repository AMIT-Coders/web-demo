"use client";
import React, { useState, useEffect } from "react";
import "./Footer.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import backend from "../../utils/backend";

import { PIPEDRIVE_API_TOKEN } from "../../utils/Pipedrive";

const Footer = () => {
  const [links, setLinks] = useState([]);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }
    try {
      const pipedriveApiUrl = "https://api.pipedrive.com/v1";
      const apiToken = PIPEDRIVE_API_TOKEN;

      // Step 1: Create a person with the provided email
      const personResponse = await fetch(
        `${pipedriveApiUrl}/persons?api_token=${apiToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: [email],
            name: "Newsletter Subscriber",
          }),
        }
      );

      if (!personResponse.ok)
        throw new Error("Failed to create person in Pipedrive");

      const personData = await personResponse.json();
      const personId = personData.data.id;

      // Step 2: Create a deal associated with the person
      const dealResponse = await fetch(
        `${pipedriveApiUrl}/deals?api_token=${apiToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Newsletter Subscription",
            person_id: personId,
            pipeline_id: 6,
          }),
        }
      );

      if (!dealResponse.ok)
        throw new Error("Failed to create deal in Pipedrive");

      setShowModal(true); // Show success modal
      setEmail(""); // Reset email field
      setIsSubmitted(true);
      setEmailValid(true);
    } catch (error) {
      console.error("Error submitting to Pipedrive:", error);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${backend}/api/links/`);
      setLinks(response.data[0]);
      // console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <>
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your subscription to our newsletter was successful!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <footer className="footer-container">
        <div className="content">
          <div className="first">
            <img
              style={{ width: "225px" }}
              src="/Assets/Brand/logo2.gif"
              alt=""
            />
            <p>
              AMIT, the Association of Management and Information Technology, is
              a swiftly expanding U.S.-based company specializing in embedded
              systems, software, computer science, and IT.
            </p>
            {links && (
              <div className="socials">
                <h4>Follow us</h4>
                <a href={links.facebook}>
                  <img src="/Assets/Socials/facebook.svg" alt="" />
                </a>
                <a href={links.instagram}>
                  <img src="/Assets/Socials/instagram.svg" alt="" />
                </a>
                <a href={links.linkedIn}>
                  <img src="/Assets/Socials/linkedin.svg" alt="" />
                </a>
                <a href={links.x}>
                  <img src="/Assets/Socials/x.svg" alt="" />
                </a>
                <a href={links.tiktok}>
                  <img src="/Assets/Socials/tiktok.svg" alt="" />
                </a>
                <a href={links.youtube}>
                  <img src="/Assets/Socials/youtube.svg" alt="" />
                </a>
              </div>
            )}
          </div>
          <div className="second">
            <h3>Site Map</h3>
            <div className="sitemap">
              <ul>
                <a href="/">Home</a>
                <a href="WhyAMIT">About Us</a>
                <a href="/Courses">Our Courses</a>
                <a href="/Resources">Resources</a>
                <a href="/Companies">For Companies</a>
                <a href="/WhyAMIT#contact">Contact Us</a>
                <a href="/Resources">Blog</a>
                <a href="/Terms">Terms & Privacy Policy</a>
              </ul>
              <br />
              <p>
                99 South Almaden Blvd., Suite 600, San Jose, California, 95113
              </p>
            </div>
          </div>
          <div className="third">
            <h3>Contact Info</h3>
            <div className="mail">
              <img src="/Assets/mail-icon.svg" alt="" />
              <a href="mailto:info@amitcoders.org">info@amitcoders.org</a>
            </div>
            <div className="mail">
              <img src="/Assets/call-icon.svg" alt="" />
              <a href="tel:+19165707964">+1 (916)570 7964</a>
            </div>

            <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p>
              For the most recent updates, promotional codes, and intriguing
              insights from the tech industry.
            </p>
            <div className="email-container">
              <div className="email">
                {!isSubmitted ? (
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                ) : (
                  <p>Submitted!</p>
                )}
                {!emailValid && (
                  <div className="error-message">
                    Please enter a valid email address.
                  </div>
                )}
                {!isSubmitted ? (
                  <button
                    type="submit"
                    className="primary-btn"
                    style={{
                      width: "auto",
                      height: "39px",
                      marginTop: "12px",
                      marginRight: "12px",
                      borderRadius: "10px",
                    }}
                    onClick={handleSubmit}
                  >
                    Subscribe
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        © All Rights Reserved. Developed By AMIT Group
      </div>
    </>
  );
};

export default Footer;

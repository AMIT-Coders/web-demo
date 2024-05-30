"use client";
import React, { useState } from "react";
import "./NewsLetter.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { PIPEDRIVE_API_TOKEN } from "../../utils/Pipedrive";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const apiToken = PIPEDRIVE_API_TOKEN; // Make sure to use your actual Pipedrive API token

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

  return (
    <>
      <div className="newsletter-container">
        <h2>Subscribe to our newsletter</h2>
        <div className="newsletter-input-container">
          {!isSubmitted ? (
            <>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubmit}>Submit</button>
            </>
          ) : (
            <p>Submitted!</p>
          )}
        </div>
        {!emailValid && (
          <div className="error-message">
            Please enter a valid email address.
          </div>
        )}
      </div>
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
    </>
  );
};

export default NewsLetter;

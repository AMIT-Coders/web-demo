"use client";
import React, { useState } from "react";
import "./ContactSection.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { PIPEDRIVE_API_TOKEN } from "../../utils/Pipedrive";
import { BounceOnScroll } from "../../utils/animations";

const ContactSection = ({ formType, id }) => {
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the success modal

  const handleCompanyNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pipedriveApiUrl = "https://api.pipedrive.com/v1";
    const apiToken = PIPEDRIVE_API_TOKEN;

    try {
      // Step 1: Create a person
      const personResponse = await fetch(
        `${pipedriveApiUrl}/persons?api_token=${apiToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullName,
            email: [email],
            phone: [phoneNumber],
            // Add companyName to the custom field if required
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
            title: "New Contact Form Submission",
            person_id: personId,
            // Set the appropriate pipeline_id if needed
          }),
        }
      );

      if (!dealResponse.ok)
        throw new Error("Failed to create deal in Pipedrive");

      const dealData = await dealResponse.json();
      const dealId = dealData.data.id;

      // Step 3: Add a note to the deal with the message
      await fetch(`${pipedriveApiUrl}/notes?api_token=${apiToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: message,
          deal_id: dealId,
        }),
      });

      setShowModal(true); // Show success modal
      // Reset form fields
      setCompanyName("");
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting to Pipedrive:", error);
    }
  };

  return (
    <>
      <section className="contact-section" id={id}>
        <div className="contact-container">
          {/* <BounceOnScroll> */}
          <div className="contact-left">
            <img src="/Assets/contact.svg" alt="Contact" />
          </div>
          {/* </BounceOnScroll> */}

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              {formType === "company" && (
                <>
                  <label htmlFor="companyName">Company Name:</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name *"
                    value={companyName}
                    onChange={handlecompanyNameChange}
                    required
                  />
                </>
              )}
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter  your name *"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter  your Email *"
                value={email}
                onChange={handleEmailChange}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <PhoneInput
                id="phone"
                name="phone"
                international
                defaultCountry="US"
                placeholder="Please insert your phone number "
                value={phoneNumber}
                onChange={handlePhoneChange}
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Write your message ..."
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you 💻🚀</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for contacting us. Our team will get back to you shortly.
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

export default ContactSection;

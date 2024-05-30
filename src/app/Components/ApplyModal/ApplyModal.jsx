"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./ApplyModal.scss";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { PIPEDRIVE_API_TOKEN } from "../../utils/Pipedrive";

import { isValidPhoneNumber } from "react-phone-number-input";

function ApplyModal({
  show,
  setShow,
  formType,
  formSource,
  title,
  note,
  curr,
}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Title = title;
  const [dealTitle, setDealTitle] = useState(Title);

  const [formData, setFormData] = useState({
    nameInput: "",
    emailInput: "",
    phoneInput: "",
    bootcampSelect: "",
    agreementChecked: false,
  });

  var labelIds;
  if (formSource === "Fullstack") {
    labelIds = [27, 28];
  } else if (formSource === "Datascience") {
    labelIds = [27, 29];
  } else {
    labelIds = [27];
  }

  useEffect(() => {
    // console.log(formSource);
    if (isSubmitted) {
      validateForm();
    }
    setDealTitle(title);
  }, [
    formData.nameInput,
    formData.emailInput,
    formData.phoneInput,
    formData.agreementChecked,
  ]);

  const validateForm = () => {
    let errors = {};

    if (!formData.nameInput) {
      errors.name = "Name is required.";
    }

    if (!formData.emailInput) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailInput)) {
      errors.email = "Email is invalid.";
    }

    if (!formData.phoneInput || !isValidPhoneNumber(formData.phoneInput)) {
      errors.phone = "Phone is required.";
    }
    if (!formData.agreementChecked) {
      errors.agreement = "Agreement is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBootcampInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDealTitle(e.target.value);
  };

  const handlePhoneInputChange = (value) => {
    setFormData({ ...formData, phoneInput: value });
  };
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreementChecked: e.target.checked });
  };

  const handleFormSubmit = async (e) => {
    let wasSubmitted = true;
    validateForm();

    const formIsValidNow = Object.keys(errors).length === 0;

    if (!isFormValid) {
      // Handle invalid form case
      return;
    } else {
      e.preventDefault();
      console.log("Form Submitted:", formData);

      const apiUrl = "https://api.pipedrive.com/v1";
      const apiToken = PIPEDRIVE_API_TOKEN;

      try {
        if (formIsValidNow) {
          setIsSubmitted(true);
        }
        // Step 1: Create a person
        const personResponse = await axios.post(
          `${apiUrl}/persons?api_token=${apiToken}`,
          {
            name: formData.nameInput,
            email: [formData.emailInput], // Pipedrive expects email and phone as arrays
            phone: [formData.phoneInput],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const personId = personResponse.data.data.id;
        // console.log("Person created with ID:", personId);

        // Step 2: Create a deal associated with the person
        const dealResponse = await axios.post(
          `${apiUrl}/deals?api_token=${apiToken}`,
          {
            title: dealTitle,
            person_id: personId,
            pipeline_id: formType === "b2b" ? 5 : 6,
            label: labelIds,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dealId = dealResponse.data.data.id;

        // Step 3: Create a note associated with the deal
        // await axios.post(`${apiUrl}/notes?api_token=${apiToken}`, {
        //   content: noteContent,
        //   deal_id: dealId,
        // });

        // Step 3: Add a note to the deal with the message
        await fetch(`${apiUrl}/notes?api_token=${apiToken}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: note,
            deal_id: dealId,
          }),
        });

        // console.log("Deal created with response:", dealResponse.data);

        // Handle success, close modal, show a success message, etc.

        if (formType === "curr") {
          // Open the PDF in a new tab for viewing
          window.open(curr, "_blank");

          // Create an iframe to trigger the download
          var iframe = document.createElement("iframe");
          // Make the iframe invisible
          iframe.style.display = "none";
          // Set the src to the PDF URL, possibly with a server-side flag or parameter to force download
          iframe.src = curr + "?download=true"; // This depends on how your server is set up to interpret the download instruction
          // Append the iframe to the document body
          document.body.appendChild(iframe);
          // Remove the iframe after a delay to give it time to trigger the download
          setTimeout(function () {
            document.body.removeChild(iframe);
          }, 2000); // Adjust delay as needed
        }

        // handleClose();
      } catch (error) {
        console.error("API Error:", error);
        // Handle error, show an error message, etc.
      }
    }
  };

  return (
    <>
      <Modal
        className="modal apply-modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <div className="tabs">
          {!isSubmitted && (
            <>
              <div className="left">
                <img src="/Assets/form-illustration.svg" alt="" />
              </div>
              <div className="right">
                <Modal.Header closeButton>
                  {formType === "curr" && (
                    <Modal.Title>
                      Kindly fill the below form to Download the Curriculum
                    </Modal.Title>
                  )}
                  {formType === "b2c" && (
                    <Modal.Title>
                      Kindly fill the below form to Start Your Journey with AMIT{" "}
                    </Modal.Title>
                  )}
                  {formType === "b2c2" && (
                    <Modal.Title>
                      Need more information about AMIT and Bootacamps <br />
                      Please Fill the form to get a call
                    </Modal.Title>
                  )}
                  {formType === "apply" && (
                    <Modal.Title>Apply To the next Bootcamp</Modal.Title>
                  )}
                  {formType === "b2b" && (
                    <Modal.Title>
                      Kindly fill the below form to Start Your Journey with AMIT{" "}
                    </Modal.Title>
                  )}
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="nameInput">
                      <Form.Label>Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please insert your name"
                        name="nameInput"
                        value={formData.nameInput}
                        onChange={handleInputChange}
                        className="inp"
                      />
                    </Form.Group>
                    {errors.name && (
                      <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                    <Form.Group className="mb-3" controlId="emailInput">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="emailInput"
                        value={formData.emailInput}
                        onChange={handleInputChange}
                        className="inp"
                        required
                      />
                    </Form.Group>
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                    <Form.Group className="mb-3" controlId="phoneInput">
                      <Form.Label>Phone*</Form.Label>
                      {/* <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phoneInput"
                    value={formData.phoneInput}
                    onChange={handleInputChange}
                  /> */}
                      <PhoneInput
                        id="phone"
                        international
                        defaultCountry="US"
                        name="phoneInput"
                        placeholder="Enter your phone number"
                        value={formData.phoneInput}
                        onChange={handlePhoneInputChange}
                        className="inp"
                      />
                    </Form.Group>
                    {errors.phone && (
                      <p style={{ color: "red" }}>{errors.phone}</p>
                    )}
                    {formType === "apply" && (
                      <Form.Group className="mb-3" controlId="bootcampSelect">
                        <Form.Label>Choose your Bootcamp to apply</Form.Label>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Form.Control
                            className="inp"
                            as="select"
                            name="bootcampSelect"
                            value={formData.bootcampSelect}
                            onChange={handleBootcampInputChange}
                            style={{ flex: 1 }}
                          >
                            {/* <option value="bootcamp1">Cybersecurity</option> */}
                            <option value="bootcamp1">
                              Software Engineering
                            </option>
                            <option value="bootcamp2">Data Science</option>
                          </Form.Control>
                          <div
                            style={{
                              marginLeft: "-16px",
                              zIndex: 1,
                              position: "relative",
                              fontSize: "0.6em",
                            }}
                          >
                            &#9654;
                          </div>
                        </div>
                      </Form.Group>
                    )}
                  </Form>
                </Modal.Body>

                <Modal.Footer>
                  <Form.Check
                    type="checkbox"
                    id="agreementCheckbox"
                    label="I agree to AMIT privacy policy and terms of services"
                    checked={formData.agreementChecked}
                    onChange={handleCheckboxChange}
                  />
                  {errors.agreement && (
                    <p style={{ color: "red" }}>{errors.agreement}</p>
                  )}
                  <Button
                    variant="primary"
                    onClick={handleFormSubmit}
                    className="form-submit-btn"
                  >
                    <p>Submit</p>
                  </Button>
                </Modal.Footer>
              </div>
            </>
          )}
        </div>
        {isSubmitted && (
          <>
            <div className="left my-4 d-flex justify-content-center">
              <img src="/Assets/form-illustration.svg" alt="" />
            </div>
            <div className="thanks">
              <h3 className="thanks-msg">
                Thank you For your contact our team will call you shortly
              </h3>
              <br />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}

export default ApplyModal;

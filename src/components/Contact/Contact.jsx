import React, { useState } from "react";
import "./Contact.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button/Button";
import client from "../../sanity";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success_message = document.querySelector(".success-message");
      success_message.classList.remove("display-success-message");

      const data = {
        _type: "users",
        name: name,
        email: email,
        message: message,
      };

      const response = await client.create(data);
      console.log("Data sent to Sanity:", response);
      success_message.classList.add("display-success-message");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending data to Sanity:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-section">
      <div id="contact-main-content" className="contact-form">
        <div className="form-heading">
          <h1>Reach out to me!</h1>
        </div>
        <div className="success-message">
          <h6>Your details are submitted successfully!!</h6>
        </div>
        <form onSubmit={sendMessage}>
          <div className="contact-form-item contact-name">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="contact-form-item contact-email">
            <label>Your EMail</label>
            <input
              type="text"
              placeholder="Enter Your EMail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="contact-form-item contact-message">
            <label>Your Message</label>
            <textarea
              placeholder="Enter Your Message"
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button
            title="Submit"
            iconName={faPaperPlane}
            buttonClass="submit-button"
            iconClass="submit-icon"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;

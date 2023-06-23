import React, { useState } from "react";
import "./Contact.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "../Utils/Button/Button";
import client from "../../sanity";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const data = {
        _type: "users",
        name: name,
        email: email,
        message: message,
      };

      const response = await client.create(data);
      console.log("Data sent to Sanity:", response);
      const success_message = document.querySelector(".success-message");
      success_message.classList.add("display-success-message");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending data to Sanity:", error);
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
        <div>
          <div className="contact-form-item contact-name">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="contact-form-item contact-email">
            <label>Your EMail</label>
            <input
              type="text"
              placeholder="Enter Your EMail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contact-form-item contact-message">
            <label>Your Message</label>
            <textarea
              placeholder="Enter Your Message"
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            title="Submit"
            iconName={faPaperPlane}
            buttonClass="submit-button"
            iconClass="submit-icon"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

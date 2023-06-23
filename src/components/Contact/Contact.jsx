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
        // Include other fields as defined in your document schema
        name: name,
        email: email,
        message: message,
      };

      const response = await client.create(data);
      console.log("Data sent to Sanity:", response);
    } catch (error) {
      console.error("Error sending data to Sanity:", error);
    }
  };

  const fetchData = async () => {
    try {
      const users = await client.fetch('*[_type == "users"]');
      console.log(users);
    } catch (error) {
      console.error("Error fetching Sanity document:", error);
    }
  };

  fetchData();

  return (
    <div id="contact-section">
      <div id="contact-main-content" className="contact-form">
        <div>
          <h1>Reach out to me!</h1>
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

// import React, { useState } from "react";
// import "./Contact.css";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import Button from "../Utils/Button/Button";
// import axios from "axios";

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const sendMessage = () => {
//     const data = {
//       name,
//       email,
//       message,
//     };
//     console.log("test");

//     axios
//       .post("http://localhost:3001/api/send-message", data)
//       .then((response) => {
//         console.log("Message sent successfully", response);
//         // Reset form fields after successful submission
//         setName("");
//         setEmail("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.error("Error sending message:", error);
//       });
//   };

//   return (
//     <div id="contact-section">
//       <div id="contact-main-content" className="contact-form">
//         <div>
//           <h1>Reach out to me!</h1>
//         </div>
//         <div>
//           <div className="contact-form-item contact-name">
//             <label>Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="contact-form-item contact-email">
//             <label>Your EMail</label>
//             <input
//               type="text"
//               placeholder="Enter Your EMail"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="contact-form-item contact-message">
//             <label>Your Message</label>
//             <textarea
//               placeholder="Enter Your Message"
//               rows={7}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>

//           <Button
//             title="Submit"
//             iconName={faPaperPlane}
//             buttonClass="submit-button"
//             iconClass="submit-icon"
//             onClick={sendMessage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact-section">
      <div id="contact-main-content" className="contact-form">
        <div>
          <h1>Reach out to me!</h1>
        </div>
        <form method="post" name="contact" netlify data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label for="comments">Comments:</label>
            <br />
            <textarea name="comments" id="comments"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;

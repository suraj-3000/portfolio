const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post("/api/send-message", (req, res) => {
  // const { name, email, message } = req.body;
  const { message } = req.body;
  // Perform necessary actions to send the message
  // console.log(`Received message: ${name} ${email} ${message}`);
  console.log(`Received message: ${message}`);

  // Send response
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

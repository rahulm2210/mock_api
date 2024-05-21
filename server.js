// server.js
const express = require("express");
const cors = require('cors');
const { users } = require("./mockData");

const app = express();
const port = 3000;

app.use(cors());
// Define routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Mock API server is running at http://localhost:${port}`);
});


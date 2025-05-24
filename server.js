const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route all requests to index.html (for React routing support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server on 0.0.0.0 so Fly.io can connect
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

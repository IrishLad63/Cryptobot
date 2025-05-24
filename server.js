const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory (like index.html, App.js, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Fallback route to serve index.html for any unknown routes (React SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// START THE SERVER — Binds to 0.0.0.0 for Fly.io
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

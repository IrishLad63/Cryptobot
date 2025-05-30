const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// --- Import and run the bot ---
const { runBot } = require('./bot');
runBot(); // runs once on startup

// --- Serve frontend from 'dist' ---
app.use(express.static(path.join(__dirname, 'dist')));

// --- API route to check bot status ---
app.get('/api/status', (req, res) => {
  res.json({ status: 'ClanceyBot is online 🚀', timestamp: new Date().toISOString() });
});

// --- Fallback route for frontend SPA ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});




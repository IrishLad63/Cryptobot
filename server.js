const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const { runBot, setPlatform, getLastAction } = require('./bot');

let performance = '0%';

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

runBot();

app.get('/api/status', (req, res) => {
  res.json({
    status: 'Running',
    lastAction: getLastAction(),
    performance
  });
});

app.post('/api/platform', (req, res) => {
  const { platform } = req.body;
  setPlatform(platform);
  res.json({ success: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



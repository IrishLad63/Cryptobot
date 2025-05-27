const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const bot = require("./bot");
const wallet = require("./wallet");
const candles = require("./candles");
const trades = require("./trades.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "build")));

// GET: Bot status
app.get("/api/status", (req, res) => {
  res.json({ status: config.status, gain: config.gain });
});

// GET: Wallet balance
app.get("/api/wallet", async (req, res) => {
  const balance = await wallet.getBalance(config.walletAddress);
  res.json({ wallet: config.walletAddress, balance });
});

// GET: Candlestick data
app.get("/api/candles", async (req, res) => {
  const symbol = req.query.symbol;
  const data = await candles.getCandles(symbol);
  res.json(data);
});

// GET: Trades
app.get("/api/trades", (req, res) => {
  res.json(trades);
});

// POST: Toggle Bot ON/OFF
app.post("/api/toggle", (req, res) => {
  config.status = !config.status;
  res.json({ status: config.status });
});

// Fallback: Serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Start the bot if ON
if (config.status) {
  bot.start();
}

// Start the backend server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



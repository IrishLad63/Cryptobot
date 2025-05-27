// File: server.js const express = require("express"); const cors = require("cors"); const path = require("path"); const bot = require("./bot"); const wallet = require("./wallet"); const candles = require("./candles"); const trades = require("./trades.json"); const config = require("./config");

const app = express(); const PORT = process.env.PORT || 3000;

app.use(cors()); app.use(express.json()); app.use(express.static(path.join(__dirname, "frontend", "build")));

// GET: Bot status app.get("/api/status", (req, res) => { res.json({ status: config.status, gain: config.totalGain }); });

// GET: Wallet balance app.get("/api/wallet", async (req, res) => { const balance = await wallet.getMaticBalance(config.walletAddress); res.json({ wallet: config.walletAddress, balance }); });

// GET: Candlestick data app.get("/api/candles", async (req, res) => { const symbol = req.query.symbol || "MATIC"; const data = await candles.getCandles(symbol); res.json(data); });

// GET: Trades app.get("/api/trades", (req, res) => { res.json(trades); });

// POST: Toggle Bot ON/OFF app.post("/api/toggle", (req, res) => { config.status = !config.status; res.json({ status: config.status }); });

// Fallback: Serve React app app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "frontend", "build", "index.html")); });

// Start the bot if ON if (config.status) { bot.run(); }

// Start server app.listen(PORT, "0.0.0.0", () => { console.log(CryptoBot backend running on port ${PORT}); });


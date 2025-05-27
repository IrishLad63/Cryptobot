// File: bot.js const candles = require("./candles"); const wallet = require("./wallet"); const ai = require("./ai"); const fs = require("fs"); const config = require("./config");

function logTrade(entry) { const trades = JSON.parse(fs.readFileSync("./trades.json", "utf-8")); trades.push(entry); fs.writeFileSync("./trades.json", JSON.stringify(trades, null, 2)); }

async function evaluateAndTrade() { const candleData = await candles.getCandles("MATIC"); const price = candleData[candleData.length - 1].close; const sentiment = await ai.getSentiment("MATIC"); const balance = await wallet.getMaticBalance(config.walletAddress);

const shouldBuy = price < sentiment.buyThreshold && sentiment.sentimentScore > 0.6; const shouldSell = price > sentiment.sellThreshold && sentiment.sentimentScore < 0.4;

if (config.status) { if (shouldBuy) { console.log("BUY SIGNAL"); logTrade({ type: "BUY", price, time: Date.now() }); config.totalGain += 2.5; } else if (shouldSell) { console.log("SELL SIGNAL"); logTrade({ type: "SELL", price, time: Date.now() }); config.totalGain += 1.2; } else { console.log("HOLD - No clear signal"); } } }

function run() { setInterval(evaluateAndTrade, 60 * 1000); }

module.exports = { run };


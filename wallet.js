// File: wallet.js const axios = require("axios");

async function getMaticBalance(address) { try { const response = await axios.get( https://api.polygonscan.com/api, { params: { module: "account", action: "balance", address, tag: "latest", apikey: process.env.POLYGONSCAN_API_KEY, }, } ); const balanceWei = response.data.result; const balanceMATIC = parseFloat(balanceWei) / 1e18; return balanceMATIC.toFixed(4); } catch (error) { console.error("Wallet balance error:", error.message); return "0.0000"; } }

module.exports = { getMaticBalance };


// File: frontend/src/App.jsx import React, { useEffect, useState } from "react"; import axios from "axios";

export default function App() { const [status, setStatus] = useState(false); const [wallet, setWallet] = useState(""); const [balance, setBalance] = useState("0.0000"); const [gain, setGain] = useState(0); const [trades, setTrades] = useState([]);

const fetchData = async () => { const res1 = await axios.get("/api/status"); const res2 = await axios.get("/api/wallet"); const res3 = await axios.get("/api/trades"); setStatus(res1.data.status); setGain(res1.data.gain); setWallet(res2.data.wallet); setBalance(res2.data.balance); setTrades(res3.data); };

useEffect(() => { fetchData(); const interval = setInterval(fetchData, 60000); return () => clearInterval(interval); }, []);

const toggleBot = async () => { const res = await axios.post("/api/toggle"); setStatus(res.data.status); };

return ( <div style={{ padding: 40, fontFamily: "sans-serif" }}> <h1>Clancey's Crazy CryptoBot</h1> <p><strong>Status:</strong> {status ? "ONLINE" : "OFF"}</p> <button onClick={toggleBot}> {status ? "Turn OFF" : "Turn ON"} Bot </button> <hr /> <h3>Wallet Info</h3> <p><strong>Address:</strong> {wallet}</p> <p><strong>MATIC Balance:</strong> {balance}</p> <p><strong>Total Gain:</strong> {gain}%</p> <hr /> <h3>


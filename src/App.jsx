import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Checking...');
  const [lastAction, setLastAction] = useState('');
  const [platform, setPlatform] = useState('uniswap');
  const [performance, setPerformance] = useState('0%');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setLastAction(data.lastAction || 'N/A');
        setPerformance(data.performance || '0%');
      });
  }, [platform]);

  const handlePlatformChange = async (e) => {
    const selected = e.target.value;
    setPlatform(selected);
    await fetch('/api/platform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform: selected })
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-6">
      <h1 className="text-4xl font-bold">Clancey's CryptoBot Dashboard</h1>
      <div>Status: <span className="text-green-400">{status}</span></div>
      <div>Last Action: {lastAction}</div>
      <div>Performance: {performance}</div>

      <div>
        <label htmlFor="platform" className="block mb-2">Select Trading Platform:</label>
        <select
          id="platform"
          value={platform}
          onChange={handlePlatformChange}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="uniswap">Uniswap</option>
          <option value="coinbase">Coinbase</option>
          <option value="kucoin">KuCoin</option>
          <option value="kraken">Kraken</option>
        </select>
      </div>
    </div>
  );
}

export default App;
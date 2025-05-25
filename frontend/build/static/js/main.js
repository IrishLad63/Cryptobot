console.log("Compiled CryptoBot dashboard is running.");
document.getElementById("root").innerHTML = `
  <div style='text-align:center;padding:40px'>
    <h1>Clancey's Crazy CryptoBot</h1>
    <p>Status: <strong>Online</strong></p>
    <div style='margin-top:2em'>
      <div style='font-size:48px;animation:blink 1s infinite'>👁️ 👁️</div>
      <p>Bot is watching the market...</p>
    </div>
    <style>
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
    </style>
  </div>
`;
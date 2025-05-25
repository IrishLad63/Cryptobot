import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Clancey's Crazy CryptoBot</h1>
      <p>Status: <strong>Online</strong></p>
      <div style={{ marginTop: "2em" }}>
        <div style={{
          fontSize: "48px",
          animation: "blink 1s infinite",
          animationName: 'blink',
        }}>
          👁️ 👁️
        </div>
        <p>Bot is watching the market...</p>
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

export default App;
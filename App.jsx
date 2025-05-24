import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Clancey's Crazy CryptoBot</h1>
      <p>Status: <strong>Online and Watching the Market</strong></p>
    </div>
  );
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

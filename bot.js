let currentPlatform = 'uniswap';
let lastAction = 'Initialized';

function runBot() {
  setInterval(() => {
    const decision = Math.random() > 0.5 ? 'BUY' : 'SELL';
    lastAction = `${decision} via ${currentPlatform}`;
    console.log('Trade Signal:', lastAction);
  }, 10000);
}

function setPlatform(name) {
  currentPlatform = name;
  console.log('Trading platform set to:', name);
}

function getLastAction() {
  return lastAction;
}

module.exports = { runBot, setPlatform, getLastAction };

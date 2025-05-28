console.log('🚀 Boot sequence started');

try {
  require('./config');
  console.log('✅ config.js loaded');
} catch (err) {
  console.error('❌ Error loading config.js:', err);
}

try {
  require('./wallet');
  console.log('✅ wallet.js loaded');
} catch (err) {
  console.error('❌ Error loading wallet.js:', err);
}

try {
  require('./bot');
  console.log('✅ bot.js loaded');
} catch (err) {
  console.error('❌ Error loading bot.js:', err);
}

try {
  require('./server');
  console.log('✅ server.js running');
} catch (err) {
  console.error('❌ Error starting server.js:', err);
}
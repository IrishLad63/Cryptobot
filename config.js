module.exports = {
  trading: {
    enabled: true,
    baseCurrency: 'USDT',
    quoteCurrency: 'BTC',
    tradeAmount: 50, // USD
    stopLossPercent: 5,
    takeProfitPercent: 10,
  },
  ai: {
    enabled: true,
    strategy: 'hybrid', // 'lstm', 'news', 'sentiment', 'hybrid'
  },
  alerts: {
    telegram: {
      enabled: false,
      botToken: '',
      chatId: '',
    },
    discord: {
      enabled: false,
      webhookUrl: '',
    },
  },
};

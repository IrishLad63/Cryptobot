// File: ai.js const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getSentiment(symbol) { const prompt = Analyze crypto news and social sentiment for ${symbol}. Provide a sentiment score between 0 (negative) and 1 (positive), and suggest a buy/sell threshold.;

const response = await openai.chat.completions.create({ model: "gpt-4", messages: [{ role: "user", content: prompt }], });

const content = response.choices[0].message.content; const match = content.match(/score[:\s]+(\d.\d+).*buy[:\s]+(\d+).*sell[:\s]+(\d+)/i);

return match ? { sentimentScore: parseFloat(match[1]), buyThreshold: parseFloat(match[2]), sellThreshold: parseFloat(match[3]), } : { sentimentScore: 0.5, buyThreshold: 0.5, sellThreshold: 0.5, }; }

module.exports = { getSentiment };




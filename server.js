require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./config');

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const { data, error } = await config.supabase.from('trades').select('*');
    if (error) throw error;
    res.json({ status: 'CryptoBot online', trades: data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Bot error');
  }
});

app.listen(PORT, () => {
  console.log(`✅ CryptoBot running on port ${PORT}`);
});
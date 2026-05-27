const axios = require("axios");

async function getMarketData(symbol = "EUR/USD") {
  const apiKey = process.env.TWELVE_API_KEY;

  const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&outputsize=100&apikey=${apiKey}`;

  const response = await axios.get(url);

  return response.data;
}

module.exports = {
  getMarketData
};

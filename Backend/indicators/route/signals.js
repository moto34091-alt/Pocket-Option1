const express = require("express");
const router = express.Router();

const axios = require("axios");

const { RSI, EMA } = require("technicalindicators");

router.get("/eurusd", async (req, res) => {
  try {
    const apiKey = process.env.TWELVE_API_KEY;

    const url =
      `https://api.twelvedata.com/time_series?symbol=EUR/USD&interval=1min&outputsize=100&apikey=${apiKey}`;

    const response = await axios.get(url);

    const candles = response.data.values;

    const closes = candles
      .map(c => parseFloat(c.close))
      .reverse();

    const rsi = RSI.calculate({
      values: closes,
      period: 14
    });

    const ema9 = EMA.calculate({
      values: closes,
      period: 9
    });

    const ema21 = EMA.calculate({
      values: closes,
      period: 21
    });

    const lastRSI = rsi[rsi.length - 1];

    const lastEMA9 = ema9[ema9.length - 1];
    const lastEMA21 = ema21[ema21.length - 1];

    let signal = "WAIT";
    let confidence = 50;

    if (lastRSI < 30 && lastEMA9 > lastEMA21) {
      signal = "BUY";
      confidence = 87;
    }

    if (lastRSI > 70 && lastEMA9 < lastEMA21) {
      signal = "SELL";
      confidence = 84;
    }

    const entryPrice =
      closes[closes.length - 1];

    res.json({
      pair: "EUR/USD OTC",
      signal,
      confidence,
      price: entryPrice,
      rsi: lastRSI.toFixed(2),
      ema9: lastEMA9.toFixed(5),
      ema21: lastEMA21.toFixed(5),
      timestamp: new Date()
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;

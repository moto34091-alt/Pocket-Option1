const express = require("express");
const router = express.Router();

const { getMarketData } = require("../services/market");
const calculateRSI = require("../indicators/rsi");
const calculateEMA = require("../indicators/ema");
const generateSignal = require("../indicators/signals");

router.get("/eurusd", async (req, res) => {
  try {
    const market = await getMarketData("EUR/USD");

    const candles = market.values || [];

    const closes = candles
      .map(c => parseFloat(c.close))
      .reverse();

    const rsi = calculateRSI(closes);

    const ema9 = calculateEMA(closes, 9);
    const ema21 = calculateEMA(closes, 21);

    const signal = generateSignal(
      rsi[rsi.length - 1],
      ema9[ema9.length - 1],
      ema21[ema21.length - 1]
    );

    res.json({
      pair: "EUR/USD OTC",
      signal
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;

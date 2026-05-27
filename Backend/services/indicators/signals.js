function generateSignal(rsi, ema9, ema21) {
  if (rsi < 30 && ema9 > ema21) {
    return {
      signal: "BUY",
      confidence: 87
    };
  }

  if (rsi > 70 && ema9 < ema21) {
    return {
      signal: "SELL",
      confidence: 84
    };
  }

  return {
    signal: "WAIT",
    confidence: 40
  };
}

module.exports = generateSignal;

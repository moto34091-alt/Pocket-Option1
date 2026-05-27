const { EMA } = require("technicalindicators");

function calculateEMA(closes, period) {
  return EMA.calculate({
    values: closes,
    period
  });
}

module.exports = calculateEMA;

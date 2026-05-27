const { RSI } = require("technicalindicators");

function calculateRSI(closes) {
  return RSI.calculate({
    values: closes,
    period: 14
  });
}

module.exports = calculateRSI;

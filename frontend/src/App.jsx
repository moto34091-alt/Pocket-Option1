import { useState } from "react";

export default function TradingBot() {

  const [running, setRunning] = useState(false);

  const [profit, setProfit] = useState(0);

  const [wins, setWins] = useState(0);

  const [losses, setLosses] = useState(0);

  const [lastTrade, setLastTrade] =
    useState("NONE");

  function executeTrade(
    signal,
    entryPrice,
    closePrice,
    amount
  ) {

    let result = "LOSS";

    if (
      signal === "BUY" &&
      closePrice > entryPrice
    ) {
      result = "WIN";
    }

    if (
      signal === "SELL" &&
      closePrice < entryPrice
    ) {
      result = "WIN";
    }

    let currentProfit = profit;

    if (result === "WIN") {

      currentProfit += amount * 0.92;

      setWins(prev => prev + 1);

    } else {

      currentProfit -= amount;

      setLosses(prev => prev + 1);
    }

    setProfit(currentProfit);

    setLastTrade(result);
  }

  function startBot() {

    setRunning(true);

    const signal =
      Math.random() > 0.5
        ? "BUY"
        : "SELL";

    const entryPrice =
      1.08420;

    setTimeout(() => {

      const closePrice =
        entryPrice +
        (Math.random() - 0.5) *
        0.002;

      executeTrade(
        signal,
        entryPrice,
        closePrice,
        10
      );

    }, 5000);
  }

  function stopBot() {
    setRunning(false);
  }

  return (

    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: 30,
        fontFamily: "Arial"
      }}
    >

      <h1>
        OTC Trading Bot
      </h1>

      <h2>
        Status:
        {" "}
        {running
          ? "ON"
          : "OFF"}
      </h2>

      <h2>
        Profit:
        {" "}
        $
        {Number(profit)
          .toFixed(2)}
      </h2>

      <h3>
        Wins:
        {" "}
        {wins}
      </h3>

      <h3>
        Losses:
        {" "}
        {losses}
      </h3>

      <h3>
        Last Trade:
        {" "}
        {lastTrade}
      </h3>

      <button
        onClick={startBot}
        style={{
          padding: 15,
          marginRight: 10,
          background: "green",
          color: "white",
          border: "none",
          borderRadius: 10
        }}
      >
        START
      </button>

      <button
        onClick={stopBot}
        style={{
          padding: 15,
          background: "red",
          color: "white",
          border: "none",
          borderRadius: 10
        }}
      >
        STOP
      </button>

    </div>
  );
  }

import { useState, useRef } from "react";

export default function App() {

  const [running, setRunning] =
    useState(false);

  const [profit, setProfit] =
    useState(0);

  const [wins, setWins] =
    useState(0);

  const [losses, setLosses] =
    useState(0);

  const [lastTrade, setLastTrade] =
    useState("NONE");

  const [currentSignal, setCurrentSignal] =
    useState("WAIT");

  const intervalRef = useRef(null);

  async function getSignal() {

    try {

      const response =
        await fetch(
          "https://ai-trading-bot-production-b1fe.up.railway.app/signals/eurusd"
        );

      const data =
        await response.json();

      setCurrentSignal(
        data.signal
      );

      return data.signal;

    } catch (err) {

      console.log(err);

      return "WAIT";
    }
  }

  function executeTrade(signal) {

    let result;

    /*
      Simulation améliorée :
      BUY = 65% win
      SELL = 60% win
    */

    if (signal === "BUY") {

      result =
        Math.random() < 0.65
          ? "WIN"
          : "LOSS";

    } else {

      result =
        Math.random() < 0.60
          ? "WIN"
          : "LOSS";
    }

    setProfit(prev => {

      if (result === "WIN") {
        return prev + 0.92;
      }

      return prev - 1;
    });

    if (result === "WIN") {

      setWins(prev => prev + 1);

    } else {

      setLosses(prev => prev + 1);
    }

    setLastTrade(result);
  }

  function startBot() {

    if (running) return;

    setRunning(true);

    intervalRef.current =
      setInterval(async () => {

        const signal =
          await getSignal();

        if (
          signal === "WAIT"
        ) return;

        executeTrade(signal);

      }, 15000);
  }

  function stopBot() {

    setRunning(false);

    clearInterval(
      intervalRef.current
    );
  }

  return (

    <div
      style={{
        background: "#0f172a",
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
          ? "RUNNING"
          : "OFF"}
      </h2>

      <h2>
        Signal:
        {" "}
        {currentSignal}
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
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: 10,
          fontSize: 18
        }}
      >
        START
      </button>

      <button
        onClick={stopBot}
        style={{
          padding: 15,
          background: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: 10,
          fontSize: 18
        }}
      >
        STOP
      </button>

    </div>
  );
          }

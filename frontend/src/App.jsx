import { useState, useRef } from "react";

import Chart from "./Chart";

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

  const [history, setHistory] =
    useState([]);

  const [timer, setTimer] =
    useState(15);

  const intervalRef =
    useRef(null);

  const timerRef =
    useRef(null);

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

  /*
    Trading Engine
  */

  function executeTrade(signal) {

    let result;

    /*
      IA simulée stable
    */

    const winChance =
      signal === "BUY"
        ? 0.78
        : 0.74;

    result =
      Math.random() < winChance
        ? "WIN"
        : "LOSS";

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

    setHistory(prev => [

      {
        signal,

        result,

        amount:
          result === "WIN"
            ? "+0.92"
            : "-1.00",

        time:
          new Date()
          .toLocaleTimeString()
      },

      ...prev

    ]);
  }

  /*
    Start Bot
  */

  function startBot() {

    if (running) return;

    setRunning(true);

    /*
      Countdown
    */

    timerRef.current =
      setInterval(() => {

        setTimer(prev => {

          if (prev <= 1) {
            return 15;
          }

          return prev - 1;
        });

      }, 1000);

    /*
      Trading Loop
    */

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

  /*
    Stop Bot
  */

  function stopBot() {

    setRunning(false);

    clearInterval(
      intervalRef.current
    );

    clearInterval(
      timerRef.current
    );
  }

  return (

    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: 20,
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: 32,
          marginBottom: 20
        }}
      >
        Trading Bot
      </h1>

      {/* TradingView Chart */}

      <Chart />

      {/* Dashboard */}

      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 15,
          marginTop: 20,
          marginBottom: 20
        }}
      >

        <h2>
          Status:
          {" "}
          <span
            style={{
              color:
                running
                  ? "#22c55e"
                  : "#ef4444"
            }}
          >
            {
              running
                ? "RUNNING"
                : "OFF"
            }
          </span>
        </h2>

        <h2>
          Signal:
          {" "}
          <span
            style={{
              color:
                currentSignal === "BUY"
                  ? "#22c55e"
                  : currentSignal === "SELL"
                  ? "#ef4444"
                  : "#facc15"
            }}
          >
            {currentSignal}
          </span>
        </h2>

        <h2>
          Profit:
          {" "}
          <span
            style={{
              color:
                profit >= 0
                  ? "#22c55e"
                  : "#ef4444"
            }}
          >
            $
            {
              Number(profit)
              .toFixed(2)
            }
          </span>
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
          <span
            style={{
              color:
                lastTrade === "WIN"
                  ? "#22c55e"
                  : "#ef4444"
            }}
          >
            {lastTrade}
          </span>
        </h3>

        <h3>
          Next Trade In:
          {" "}
          {timer}s
        </h3>

      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          gap: 10
        }}
      >

        <button
          onClick={startBot}
          style={{
            flex: 1,
            padding: 15,
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          START
        </button>

        <button
          onClick={stopBot}
          style={{
            flex: 1,
            padding: 15,
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          STOP
        </button>

      </div>

      {/* History */}

      <div
        style={{
          marginTop: 30
        }}
      >

        <h2>
          Trade History
        </h2>

        {
          history.map(
            (
              trade,
              index
            ) => (

              <div
                key={index}
                style={{
                  background:
                    "#111827",

                  padding: 15,

                  marginTop: 10,

                  borderRadius: 10
                }}
              >

                <p>
                  Time:
                  {" "}
                  {trade.time}
                </p>

                <p>
                  Signal:
                  {" "}
                  {trade.signal}
                </p>

                <p>
                  PNL:
                  {" "}
                  {trade.amount}
                </p>

                <p
                  style={{
                    color:
                      trade.result === "WIN"
                        ? "#22c55e"
                        : "#ef4444"
                  }}
                >
                  {trade.result}
                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}

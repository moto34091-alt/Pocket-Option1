import { useState } from "react";

export default function OTCTradingUI() {

  const [market, setMarket] =
    useState("EURUSD OTC");

  const [amount, setAmount] =
    useState(5);

  const [running, setRunning] =
    useState(false);

  const [profit, setProfit] =
    useState(0);

  const [signal, setSignal] =
    useState("WAIT");

  function runBot() {

    setRunning(true);

    setSignal("BUY");

    setInterval(() => {

      const win =
        Math.random() < 0.75;

      if (win) {

        setProfit(prev =>
          prev + amount * 0.92
        );

      } else {

        setProfit(prev =>
          prev - amount
        );
      }

    }, 15000);
  }

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">

      <div className="w-full max-w-sm bg-[#0f172a] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">

        {/* Header */}

        <div className="p-5 border-b border-gray-800">

          <h1 className="text-3xl font-black">

            OTC AI BOT

          </h1>

          <p className="text-gray-400 mt-1">

            Automatic OTC Trading

          </p>

        </div>

        {/* Market */}

        <div className="p-5">

          <p className="text-gray-400 mb-2">

            OTC Market

          </p>

          <select
            value={market}
            onChange={e =>
              setMarket(
                e.target.value
              )
            }
            className="w-full bg-[#111827] p-4 rounded-2xl border border-gray-700"
          >

            <option>
              EURUSD OTC
            </option>

            <option>
              GBPUSD OTC
            </option>

            <option>
              USDJPY OTC
            </option>

            <option>
              BTCUSD OTC
            </option>

          </select>

        </div>

        {/* Payout */}

        <div className="px-5">

          <div className="bg-[#111827] rounded-2xl p-4 border border-gray-700 flex justify-between">

            <span>
              Payout
            </span>

            <span className="text-green-400 font-bold">

              92%

            </span>

          </div>

        </div>

        {/* Amount */}

        <div className="p-5">

          <p className="text-gray-400 mb-2">

            Amount Per Trade

          </p>

          <input
            type="number"
            value={amount}
            onChange={e =>
              setAmount(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full bg-[#111827] p-4 rounded-2xl border border-gray-700"
          />

        </div>

        {/* Dashboard */}

        <div className="px-5">

          <div className="bg-[#111827] rounded-2xl p-5 border border-gray-700">

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Status
              </span>

              <span
                className={
                  running
                    ? "text-green-400 font-bold"
                    : "text-red-400 font-bold"
                }
              >

                {
                  running
                    ? "RUNNING"
                    : "OFF"
                }

              </span>

            </div>

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Signal
              </span>

              <span className="text-green-400 font-bold">

                {signal}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Profit
              </span>

              <span
                className={
                  profit >= 0
                    ? "text-green-400 font-bold"
                    : "text-red-400 font-bold"
                }
              >

                $
                {
                  profit.toFixed(2)
                }

              </span>

            </div>

          </div>

        </div>

        {/* Run Button */}

        <div className="p-5">

          <button
            onClick={runBot}
            className="w-full bg-gradient-to-r from-green-400 to-green-600 text-black py-4 rounded-2xl text-lg font-black shadow-lg active:scale-95 transition"
          >

            RUN BOT

          </button>

        </div>

        {/* Bottom */}

        <div className="grid grid-cols-4 border-t border-gray-800 py-4 text-center text-xs text-gray-400">

          <div className="flex flex-col items-center gap-1 text-white">

            <span>📈</span>

            <span>Trading</span>

          </div>

          <div className="flex flex-col items-center gap-1">

            <span>📊</span>

            <span>Stats</span>

          </div>

          <div className="flex flex-col items-center gap-1">

            <span>⚡</span>

            <span>Signals</span>

          </div>

          <div className="flex flex-col items-center gap-1">

            <span>⚙️</span>

            <span>Settings</span>

          </div>

        </div>

      </div>

    </div>

  );

          }

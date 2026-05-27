export default function OTCTradingUI() {

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">

      <div className="w-full max-w-sm bg-[#0f172a] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">

        {/* Header */}

        <div className="flex justify-between items-center p-4 border-b border-gray-800">

          <button className="text-red-500 text-sm">
            ✕ Close
          </button>

          <div className="flex gap-3 text-gray-400">

            <span>⌄</span>

            <span>⋯</span>

          </div>

        </div>

        {/* Hero */}

        <div className="p-5">

          <h1 className="text-5xl font-black leading-tight">

            Trade AI is
            <br />

            analyzing
            <br />

            <span className="text-red-500">
              the market...
            </span>

          </h1>

          <p className="text-gray-400 mt-4">

            Optimizing the next trade

          </p>

          {/* AI Status */}

          <div className="mt-6 bg-[#111827] border border-gray-700 rounded-2xl p-4 flex items-center gap-3">

            <div className="w-5 h-5 rounded-full bg-green-500 animate-pulse" />

            <div>

              <h3 className="font-bold">
                Trade AI Started
              </h3>

              <p className="text-gray-400 text-sm">
                Connected to market
              </p>

            </div>

          </div>

          <p className="text-gray-500 text-sm mt-4">

            Fetching OTC market data...

          </p>

        </div>

        {/* Dashboard */}

        <div className="px-5">

          <div className="bg-[#111827] rounded-2xl p-5 border border-gray-700">

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Status
              </span>

              <span className="text-green-400 font-bold">
                RUNNING
              </span>

            </div>

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Signal
              </span>

              <span className="text-green-400 font-bold">
                BUY
              </span>

            </div>

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Profit
              </span>

              <span className="text-green-400 font-bold">
                +$24.82
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Next Trade
              </span>

              <span className="font-bold">
                12s
              </span>

            </div>

          </div>

        </div>

        {/* Button */}

        <div className="p-5">

          <button className="w-full bg-gradient-to-r from-gray-300 to-gray-500 text-black py-4 rounded-2xl text-lg font-black shadow-lg active:scale-95 transition">

            ANALYZING...

          </button>

        </div>

        {/* Bottom Navigation */}

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

            <span>👥</span>

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

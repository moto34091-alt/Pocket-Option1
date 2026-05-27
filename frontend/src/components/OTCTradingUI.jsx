export default function OTCTradingUI() { return ( <div className="min-h-screen bg-[#0b1020] text-white flex items-center justify-center p-4"> <div className="w-full max-w-sm bg-[#111827] rounded-3xl shadow-2xl overflow-hidden border border-gray-800">

{/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
      <button className="text-sm text-red-400">✕ Close</button>
      <div className="flex gap-2 text-gray-400 text-sm">
        <span>⌄</span>
        <span>⋯</span>
      </div>
    </div>

    {/* Hero */}
    <div className="px-5 pt-6 pb-4 bg-gradient-to-b from-red-900/40 to-transparent">
      <h1 className="text-4xl font-black leading-tight tracking-tight">
        Trade AI is
        <br />
        analyzing
        <br />
        <span className="text-red-500">
          the market...
        </span>
      </h1>

      <p className="text-gray-400 mt-3 text-sm">
        Optimizing the next trade
      </p>

      <div className="mt-5 bg-[#1f2937] rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-700">
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs">
          ✓
        </div>

        <div>
          <p className="font-semibold text-sm">
            Trade AI Started
          </p>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-xs">
        Fetching market data...
      </div>
    </div>

    {/* Stats */}
    <div className="px-5 mt-2">

      <div className="bg-[#1f2937] rounded-2xl p-4 border border-gray-700">
        <div className="flex justify-between mb-3">
          <span className="text-gray-400">
            Status
          </span>

          <span className="text-green-400 font-bold">
            RUNNING
          </span>
        </div>

        <div className="flex justify-between mb-3">
          <span className="text-gray-400">
            Signal
          </span>

          <span className="text-green-400 font-bold">
            BUY
          </span>
        </div>

        <div className="flex justify-between mb-3">
          <span className="text-gray-400">
            Profit
          </span>

          <span className="text-green-400 font-bold">
            +$12.44
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Timer
          </span>

          <span className="font-bold">
            12s
          </span>
        </div>
      </div>

    </div>

    {/* AI Analyze */}
    <div className="px-5 mt-5">

      <button className="w-full bg-gradient-to-r from-gray-300 to-gray-500 text-black py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition">
        Analyzing...
      </button>

    </div>

    {/* Bottom Nav */}
    <div className="mt-8 border-t border-gray-800 grid grid-cols-4 text-center py-4 text-xs text-gray-400">

      <div className="flex flex-col items-center gap-1 text-white">
        <span>📈</span>
        <span>Trading</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>📊</span>
        <span>Statistics</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>👥</span>
        <span>Friends</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>❤️</span>
        <span>Support</span>
      </div>

    </div>

  </div>
</div>

); }

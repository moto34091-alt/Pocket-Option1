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
      OTC Trading Bot
    </h1>

    <div
      style={{
        background: "#111827",
        padding: 20,
        borderRadius: 15,
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
          {running
            ? "RUNNING"
            : "OFF"}
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
                : "#ef4444"
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
          {Number(profit)
            .toFixed(2)}
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

    </div>

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
          fontSize: 18
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
          fontSize: 18
        }}
      >
        STOP
      </button>

    </div>

  </div>
);

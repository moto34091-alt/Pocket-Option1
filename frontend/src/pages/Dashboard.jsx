import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadSignal();
  }, []);

  async function loadSignal() {
    const response = await axios.get(
      "https://YOUR-RENDER-URL.onrender.com/signals/eurusd"
    );

    setData(response.data);
  }

  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: 20
      }}
    >
      <h1>OTC TRADE AI</h1>

      {data && (
        <div
          style={{
            background: "#1b1b1b",
            padding: 20,
            borderRadius: 20,
            marginTop: 20
          }}
        >
          <h2>{data.pair}</h2>

          <h1>{data.signal.signal}</h1>

          <p>
            Confidence: {data.signal.confidence}%
          </p>
        </div>
      )}
    </div>
  );
}

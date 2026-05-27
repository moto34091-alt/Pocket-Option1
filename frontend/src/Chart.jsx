import { useEffect, useRef } from "react";

import {
  createChart
} from "lightweight-charts";

export default function Chart() {

  const chartContainerRef =
    useRef();

  useEffect(() => {

    const chart =
      createChart(
        chartContainerRef.current,
        {
          width:
            window.innerWidth - 40,

          height: 300,

          layout: {
            background: {
              color: "#111827"
            },

            textColor: "white"
          },

          grid: {
            vertLines: {
              color: "#1f2937"
            },

            horzLines: {
              color: "#1f2937"
            }
          }
        }
      );

    const candleSeries =
      chart.addCandlestickSeries();

    candleSeries.setData([
      {
        time: "2025-05-01",
        open: 1.08,
        high: 1.10,
        low: 1.07,
        close: 1.09
      },

      {
        time: "2025-05-02",
        open: 1.09,
        high: 1.11,
        low: 1.08,
        close: 1.10
      },

      {
        time: "2025-05-03",
        open: 1.10,
        high: 1.12,
        low: 1.09,
        close: 1.11
      }
    ]);

    return () => chart.remove();

  }, []);

  return (

    <div
      ref={chartContainerRef}
    />

  );
}

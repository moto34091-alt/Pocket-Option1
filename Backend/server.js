require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OTC Trading AI Running"
  });
});

app.get("/signals/eurusd", (req, res) => {
  res.json({
    pair: "EUR/USD OTC",
    signal: "BUY",
    confidence: 87
  });
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("message", {
    text: "Connected to OTC AI"
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${PORT}`);
});

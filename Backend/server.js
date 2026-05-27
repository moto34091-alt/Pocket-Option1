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

const signalRoute = require("./routes/signals");

app.use("/signals", signalRoute);

app.get("/", (req, res) => {
  res.json({
    status: "OTC Trade AI Running"
  });
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("message", {
    text: "Connected to OTC AI"
  });
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

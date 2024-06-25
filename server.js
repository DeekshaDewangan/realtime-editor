import express from "express";
import http from "http";
import { Server } from "socket.io";
import process from "process";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

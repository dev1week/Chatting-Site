import http from "http";
import express from "express";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("3000 개방");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  console.log("브라우저와 연결되었습니다.");
  socket.on("close", () => console.log("브라우저와의 연결이 끊어졌습니다."));
  socket.on("message", (message) => {
    sockets.forEach((aSocket) => aSocket.send(`${message}`));
  });
});

wss.on("close", () => {
  console.log("브라우저와의 접속이 끊어졌습니다.");
});

server.listen(3000, handleListen);

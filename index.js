const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");

const roomRouter = require("./route/room");

app.use(cors());
app.use(express.json());
app.use("/room", roomRouter);

const hostname = "0.0.0.0";

const httpServer = http.createServer(app);
httpServer.listen(8080, hostname, function () {
  const port = httpServer.address().port;
  console.log("HTTP server running on port", port);
});

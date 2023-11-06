const express = require("express");
const app = express();
require("./DB/connection");
const cors = require("cors");
const http = require('http');

const router = require("./route/route")

app.use(cors());
app.use(express.json());
app.use(router);

const hostname = '0.0.0.0';

const httpServer = http.createServer(app);
httpServer.listen(8080, hostname, function() {
  const port = httpServer.address().port;
  console.log('HTTP server running on port', port);
});

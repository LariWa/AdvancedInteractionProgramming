import express, { Application } from "express";
import path from "path";
import https from "https";
import fs from "fs";
import cors from "cors";
import UserRouter from "./db/UserController"; //import User Routes
import DataRouter from "./db/DataController"; //import Data Routes

const api = require("./api");
const app = express();
const port = process.env.PORT || 8080;
const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"),
  cert: fs.readFileSync("./cert/localhost.pem"),
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:19006/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});
app.use(express.json());

//app.use(cors({ credentials: true, origin: "*" }));

app.use("/api", api);
app.use("/user", UserRouter);
app.use("/db", DataRouter);

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log("Server is listening on port:" + port);
});

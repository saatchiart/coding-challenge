const dev = process.env.NODE_ENV !== "production";

const express = require("express");
const cookieParser = require("cookie-parser");
const nextJS = require("next");
const compression = require("compression");

const errorHandlerMiddleware = require("./middleware/errorHandler");
// APIs & Routes
const apis = require("./middleware/apis");
const routes = require("./middleware/routes");

const nextApp = nextJS({ dev });
const server = express();
nextApp
  .prepare()
  .then(() => {
    if (!dev) {
      server.use(compression());
    }
    server.use(cookieParser());
    // Public/Static Assets
    server.use(express.static("public"));
    // APIs
    server.use(apis());
    // ClientSide
    // NextJS Files /_next/( PAGE, _error, main ).js
    server.get("/_next/*", (req, res) => {
      nextApp.getRequestHandler()(req, res);
    });
    // Next Routes
    server.use(routes(nextApp));
    // Redirect for Bad URLS - Unknown Routes
    server.use("*", (req, res, next) => {
      console.error("unknown route");
      return res.send(
        `Unknown Route: <a href='/challenge'>Go To Challenge</a>`
      );
    });
    // Server
    server.listen(3000, err => {
      if (err) throw err;
      console.info("> Ready on http://localhost:3000");
    });
    // Error Handling Middleware
    server.use(errorHandlerMiddleware);
  })
  .catch(error => {
    // Handle the error!
    console.error(`Error Starting App`, { error });
    // Kill Process
    process.exit(1);
  });

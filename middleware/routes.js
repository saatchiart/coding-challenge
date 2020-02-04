const express = require("express");
const fs = require("fs");
const util = require("util");

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

const routes = nextApp => {
  const router = express.Router();

  // App for showing default data and file structure
  router.get("/challenge/:section?", async (req, res) => {
    const markdown = await readFile("./public/CHALLENGE.md");
    return nextApp.render(req, res, "/challenge", {
      page: {
        name: "challenge",
        params: {
          ...req.params,
          ...req.query
        },
        markdown
      }
    });
  });

  return router;
};

module.exports = routes;

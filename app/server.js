const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from AKS",
    time: new Date().toISOString()
  });
});

app.get("/healthz", (req, res) => res.status(200).send("ok"));

app.listen(3000, () => console.log("Listening on :3000"));

// const cors = require("cors");
const express = require("express");

const app = express();
// app.use(cors());

app.get("/testApi", (req, res) => {
  res.json({ hello: "world" });
});

const port = 3001;

app.listen(port, () =>
  console.log(`Fake json server listening on port ${port}!`)
);

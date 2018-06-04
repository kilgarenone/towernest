// const cors = require("cors");
const express = require("express");

const app = express();
// app.use(cors());

app.get("/testApi", (req, res) => {
  // res.statusCode = 404;
  res.json({ hello: "world" });
});

app.get("/auth/getAccessToken", (req, res) => {
  res.json({ access_token: "1234" });
});

const port = 3001;

app.listen(port, () =>
  console.log(`Fake json server listening on port ${port}!`)
);

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("GET / request ");
});

app.post("/", (req, res) => {
  res.send("POST / request");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listenning to the port ${PORT}`));

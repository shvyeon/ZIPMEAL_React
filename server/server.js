const express = require("express");
const app = express();
const generalController = require("./controllers/general");

app.get("/", (req, res) => {
  res.send({ test: "hi" });
});

app.use("/main", generalController);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use((err, req, res, next) => {
  console.log(err, stack);
  res.status(500).send("Something broke!");
});

// Define a port to listen to requests on
const HTTP_PORT = process.env.PORT || 8080;

function onHTTpStart() {
  console.log(`Express http server listening on : ${HTTP_PORT}`);
}

// LIsten on port 8080
app.listen(HTTP_PORT, onHTTpStart);

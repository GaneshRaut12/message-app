const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const messageDetails = [];

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/get-messages", (req, res) => {
  res.json(messageDetails);
});
app.post("/post-data", (req, res) => {
  messageDetails.push({
    message: req.body.message,
    username: req.body.username,
    date: new Date(),
  });
  res.redirect("index.html");
  console.log(messageDetails);
});
app.listen(3000, () => {
  console.log("Listing on the PORT 3000");
});

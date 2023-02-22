const express = require('express')
const app = express()
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// const port =4000 

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});



module.exports = app
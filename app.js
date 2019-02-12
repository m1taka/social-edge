/* eslint-disable no-console */
'use strict'

// LIBRARIES
const express = require('express')
const bodyParser = require('body-parser')
// const session = require("express-session");
const path = require('path')
const fs = require('fs');
const cors = require('cors');
const app = express();
//routes
const survey = require('./api/routes/survey');
const results = require('./api/routes/results');

// CONGIGURATION FILE
// const jsonConfig = JSON.parse(fs.readFileSync(`${__dirname}/config.json`).toString());
const jsonConfig = JSON.parse(fs.readFileSync(`${__dirname}/config.json`).toString());

// app.use(
//   session({
//     secret: "mysecret",
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   })
// );

app.use(express.static(`${__dirname}/dist/`));

// ENABLE CORS
app.use(cors());

// BODYPARSER CONFIG
app.use(bodyParser.json({
  limit: "100mb"
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

//add routes
app.use("/api/survey", survey);
app.use("/api/results", results);

// ALWAYS RETURN INDEX.HTML
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/index.html`));
});

const PORT = jsonConfig.serverPort || 4000;
// const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});



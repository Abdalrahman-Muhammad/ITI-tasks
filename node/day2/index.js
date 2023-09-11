const express = require('express');
const usersRouter = require("./routes/todos");
const { createFileIfNotExist } = require('./controllers/functions')
//created the server
const app = express();
app.use(express.json()); // parse json in body middleware
const path = process.env.MY_PATH || "/todos"
console.log(path);
app.use(path, usersRouter);

// starting to listen
const portNum = process.env.PORT_NUM || 5000;
const filePath = process.env.FILE_PATH || "./db/db.json"


app.listen(portNum, (err) => {
  if (err) {
    console.log(err);
  } else {
    createFileIfNotExist(filePath);
    console.log(`Server is runnung on port num: ${portNum}`);
  }
})
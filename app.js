const express = require("express");
const todoController = require('./controllers/todo-controller');

const app = express();

app.set("view engine", "ejs");

app.use(express.static('./public'))

//Controllers
todoController(app);

app.listen(4000);
console.log('App is listening to port 4000!!!');
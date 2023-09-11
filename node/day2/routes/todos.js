const express = require("express");
const Router = express.Router();
const { createTodo, listAll, listOne, updateTodo, removeTodo } = require("../controllers/todosControllers")
//------------------------------------------------------------------------
//create todo
Router.post('/', createTodo)
//list all
Router.get('/', listAll)
//list one
Router.get('/:id', listOne)
// update todo
Router.put('/:id', updateTodo)
//reomve
Router.delete('/:id', removeTodo)

module.exports = Router;
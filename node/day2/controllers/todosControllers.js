
const fs = require('fs');

const createTodo = (req, res) => {
  const todos = fs.readFileSync("./db/db.json", 'utf-8');
  const parsedTodos = JSON.parse(todos);
  console.log(req.body);
  const bodyData = req.body;

  const todo = {
    id: parsedTodos.length == 0 ? 1 : parsedTodos[parsedTodos.length - 1].id + 1,
    checked: false,
    ...bodyData
  }
  parsedTodos.push(todo);

  fs.writeFileSync('./db/db.json', JSON.stringify(parsedTodos));
  res.send(`You added a new todo see your todos here ${fs.readFileSync('./db/db.json')}`)
  // const stringfyTodo = JSON.stringify(todo)

}

const listAll = (req, res) => {
  console.log(req.query)
  res.send(`Your todo list is : ${fs.readFileSync('./db/db.json')}`);
}

const listOne = (req, res) => {
  const todos = fs.readFileSync("./db/db.json", 'utf-8');
  const parsedTodos = JSON.parse(todos);

  const userId = parseInt(req.params.id);
  if (parsedTodos.filter((ele) => ele.id == userId).length != 1) return res.send(`No such id`)
  const target = parsedTodos.filter((ele) => ele.id == userId)[0];


  res.send(`Your todo is ${JSON.stringify(target)}`)


}

const updateTodo = (req, res) => {
  const todos = fs.readFileSync("./db/db.json", 'utf-8');
  const parsedTodos = JSON.parse(todos);
  const userId = parseInt(req.params.id);

  if (parsedTodos.filter((ele) => ele.id == userId).length != 1) return res.send(`No such id`)
  const target = parsedTodos.filter((ele) => ele.id == userId)[0];
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == userId)[0]);

  const bodyData = req.body;

  const modifiedTarget = Object.assign(target, bodyData);

  parsedTodos.splice(targetIndex, 1, modifiedTarget);


  fs.writeFileSync('./db/db.json', JSON.stringify(parsedTodos));
  res.send(`Your modified todo ${JSON.stringify(modifiedTarget)}`)


}

const removeTodo = (req, res) => {
  const todos = fs.readFileSync("./db/db.json", 'utf-8');
  const parsedTodos = JSON.parse(todos);
  const userId = parseInt(req.params.id);
  if (parsedTodos.filter((ele) => ele.id == userId).length != 1) return res.send(`No such id`)
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == userId)[0]);
  parsedTodos.splice(targetIndex, 1);
  fs.writeFileSync('./db/db.json', JSON.stringify(parsedTodos));
  res.send(`Deleted Succsessfully`)
}











module.exports = {
  createTodo, listAll, listOne, updateTodo, removeTodo
}
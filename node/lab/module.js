const fs = require("fs");
const filePath = process.env.filePath || "./db.json";

function createFileIfNotExist() {
  const exists = fs.existsSync(filePath);
  if (!exists) {
    fs.writeFileSync(filePath, JSON.stringify([]))
  }
}
createFileIfNotExist();

function add(data) {
  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);
  // console.log(parsedTodos);
  const todo = {
    ...data,
    id: parsedTodos.length != 0 ? parsedTodos[parsedTodos.length - 1]["id"] + 1 : 1,
    checked: false
  }

  parsedTodos.push(todo);
  //write 
  fs.writeFileSync(filePath, JSON.stringify(parsedTodos));
}
function edit(data) {
  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);
  // console.log(data);
  const target = parsedTodos.filter((ele) => ele.id == data.id)[0];
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == data.id)[0]);
  // console.log(targetIndex);
  target.title = data.title;
  target.body = data.body;
  // console.log("ss", target);
  parsedTodos.splice(targetIndex, 1, target);

  fs.writeFileSync(filePath, JSON.stringify(parsedTodos));
}
function remove(data) {

  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);
  // const target = parsedTodos.filter((ele) => ele.id == data.id)[0];
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == data.id)[0]);
  parsedTodos.splice(targetIndex, 1);
  fs.writeFileSync(filePath, JSON.stringify(parsedTodos));



}
function check(data) {

  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);
  const target = parsedTodos.filter((ele) => ele.id == data.id)[0];
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == data.id)[0]);
  target.checked = true;
  parsedTodos.splice(targetIndex, 1, target);
  fs.writeFileSync(filePath, JSON.stringify(parsedTodos));
}
function uncheck(data) {

  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);
  const target = parsedTodos.filter((ele) => ele.id == data.id)[0];
  const targetIndex = parsedTodos.indexOf(parsedTodos.filter((ele) => ele.id == data.id)[0]);
  target.checked = false;
  parsedTodos.splice(targetIndex, 1, target);
  fs.writeFileSync(filePath, JSON.stringify(parsedTodos));
}




function list(data) {
  const todos = fs.readFileSync(filePath, 'utf-8'); //read
  const parsedTodos = JSON.parse(todos);

  if (data.checked == "all") {

    console.log(parsedTodos);
  } else if (data.checked == "true") {
    const checked = parsedTodos.filter((ele) => ele.checked == true);

    console.log(checked);

  } else if (data.checked == "false") {
    const unchecked = parsedTodos.filter((ele) => ele.checked == false);

    console.log(unchecked);
  }
}



module.exports = { add, edit, remove, check, uncheck, list }
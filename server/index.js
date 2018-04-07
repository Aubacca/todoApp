// Applications requirements.
const express = require("express");

const todoService = require("./services/todoService");
const charEscaper = require("./services/charEspace");

//
// Application data.
let todoList = require("./data/todos.json");

const baseUrl = "/api/v1";

//
// Application initializations.
const app = express();
app.use(express.json());

//
// Application settings.
app.set("port", process.env.PORT || 3000);

// @todo
// Get all todos.
app.get(baseUrl + "/todos", (req, res) => {
  let foundTodos = todoService.getAll();
  if (req.query.done) {
    foundTodos = foundTodos.filter(
      todo => todo.done === JSON.parse(req.query.done)
    );
  }
  //
  res.send(foundTodos);
});

// @todo
// Get one specific todo.
app.get(baseUrl + "/todos/:id", (req, res) => {
  const findOne = todoService.findById(req.params.id);
  if (!findOne) {
    return res
      .status(404)
      .send(`The todo with ID ${req.params.id} was not found!`);
  }
  res.send(findOne);
});

// @todo
// Get all open todos.
app.get(baseUrl + "/todos-open", (req, res) => {
  const findTodosDone = todoService
    .getAll()
    .filter(todo => todo.done === false);
  res.send(findTodosDone);
});

// @todo
// Add a todo.
app.post(baseUrl + "/todos", (req, res) => {
  // Validation
  const { error } = todoService.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //
  const newTodo = todoService.insert(req.body);
  //
  res.status(201).send(newTodo);
});

// @todo
// Update a todo.
app.put(baseUrl + "/todos/:id", (req, res) => {
  // Find the todo to be updated in the list.
  const findOne = todoService.findById(req.params.id);
  if (!findOne) {
    return res
      .status(404)
      .send(`The todo with ID ${req.params.id} was not found!`);
  }
  //
  // Validation updated todo values.
  const { error } = todoService.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  res.send(todoService.update(req.params.id, req.body))
});

// @todo
// Delete a todo.
app.delete(baseUrl + "/todos/:id", (req, res) => {
  // Find the todo to be updated.
  const findOne = todoService.findById(req.params.id);
  if (!findOne) {
    return res
      .status(404)
      .send(`The todo with ID ${req.params.id} was not found!`);
  }
  //
  // Delete todo from list.
  const index = todoService.getAll().indexOf(findOne);
  todoService.getAll().splice(index, 1);
  //
  // Send back the deleted todo.
  res.send(findOne);
});

// @todo
// Add input validation.
const appPort = process.env.PORT || 3000;
app.listen(app.get("port"), () =>
  console.log(`Backend is listening on port ${app.get("port")}.`)
);

/*
const isLittler = charEscaper.unescape("&lt;");
console.log("&lt;=", isLittler);

const greeting = require("./services/greetings");
console.log(greeting.sayHelloInEnglish());
console.log(greeting.sayHelloInSpanish());

const books = require("./services/book");
console.log(books.film101);
console.log(books.film102);
console.log(books.getIt());
*/
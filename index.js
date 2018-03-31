// Applications requirements.
const express = require("express");
const uuidv4 = require('uuid/v4');
const Joi = require('joi');

//
// Application data.
let todoList = require('./data/todos.json');

const baseUrl = "/api/v1";

//
// Application initializations.
const app = express();
app.use(express.json());


todoList;

const notes = [
  { id: 1, note: "Learn Python", status: "New" },
  { id: 2, note: "Plan tracks", status: "In process" },
  { id: 3, note: "Order switches and tracks", status: "New" },
  { id: 4, note: "Find new project", status: "In process" },
  { id: 5, note: "Repair computer", status: "Closed" },
  { id: 6, note: "Repair bicylce", status: "Closed" }
];

//
// Application settings.
app.set('port', process.env.PORT || 3000);

//
// Application Routing.
app.get("/", (req, res) => res.send("Hello World, hello anybody else .."));

app.get(baseUrl + "/notes", (req, res) => res.send(notes));

app.get(baseUrl * "/notes/:noteId", (req, res) => {
  const findOne = notes.find(note => note.id === parseInt(req.params.noteId));
  if (!findOne) {
    res
      .send(`Your note with id ${req.params.noteId} was not found!`)
      .status(404);
    return;
  }
  res.send(findOne);
});


// @todo
// Todo utils.
validateTodo = function (todo) {
  // Validation
  const schemaTodo = Joi.object().keys({
    todo: Joi.string().min(3).max(200).required(),
    remark: Joi.string().max(200),
    public: Joi.boolean().required()
  });
  //
  return Joi.validate(todo, schemaTodo);
}

findById = function (todoId) {
  return todoList.find(todo => todo._id === todoId);
}

// @todo
// Get all todos.
app.get(baseUrl + "/todos", (req, res) => {
  let foundTodos = todoList;
  if (req.query.done) {
    foundTodos = foundTodos.filter(todo => todo.done === JSON.parse(req.query.done));
  }
  //
  res.send(foundTodos)
});

// @todo
// Get one specific todo.
app.get(baseUrl + "/todos/:id", (req, res) => {
  const findOne = findById(req.params.id);
  if (!findOne) {
    return res.status(404).send(`The todo with ID ${req.params.id} was not found!`);
  }
  res.send(findOne);
});

// @todo
// Get all open todos.
app.get(baseUrl + "/todos-open", (req, res) => {
  const findTodosDone = todoList.filter(todo => todo.done === false);
  res.send(findTodosDone);
});

// @todo
// Add a todo.
app.post(baseUrl + "/todos", (req, res) => {
  // Validation
  let {error} = validateTodo(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //
  const newTodo = {
    _id: uuidv4(),
    todo: req.body.todo,
    pubic: req.body.public || true,
    remark: req.body.remark,
    done: false
  };
  todoList.push(newTodo);
  //
  res.status(201).send(newTodo);
});

// @todo
// Update a todo.
app.put(baseUrl + "/todos/:id", (req, res) => {
  // Find the todo to be updated in the list.
  const findOne = findById(req.params.id);
  if (!findOne) {
    return res.status(404).send(`The todo with ID ${req.params.id} was not found!`);
  }
  //
  // Validation updated todo values.
  const {error} = validateTodo(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // Get indox of todo in list.
  const todoIndex = todoList.findIndex(todo => todo._id === req.params.id);
  // Update todo with new data.
  todoList[todoIndex].todo = req.body.todo;
  todoList[todoIndex].remark = req.body.remark;
  todoList[todoIndex].public = req.body.public;
  //
  // Set back the updated todo.
  res.send(todoList[todoIndex]);
});

// @todo
// Delete a todo.
app.delete(baseUrl + "/todos/:id", (req, res) => {
  // Find the todo to be updated.
  const findOne = findById(req.params.id);
  if (!findOne) {
    return res.status(404).send(`The todo with ID ${req.params.id} was not found!`);
  }
  //
  // Delete todo from list.
  const index = todoList.indexOf(findOne);
  todoList.splice(index, 1);
  //
  // Send back the deleted todo.
  res.send(findOne);
});

// @todo
// Add input validation.

const appPort = process.env.PORT || 3000;
app.listen(app.get('port'), () =>
  console.log(`Backend is listening on port ${app.get('port')}.`)
);
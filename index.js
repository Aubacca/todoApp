// Applications requirements.
const express = require("express");
const uuidv4 = require('uuid/v4');
const Joi = require('joi');

//
// Application data.
let todoList = require('./data/todos.json');

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

app.get("/api/v1/notes", (req, res) => res.send(notes));

app.get("/api/v1/notes/:noteId", (req, res) => {
  const findOne = notes.find(note => note.id === parseInt(req.params.noteId));
  if (!findOne) {
    res
      .send(`Your note with id ${req.params.noteId} was not found!`)
      .status(404);
    return;
  }
  res.send(findOne);
});

app.get("/api/v1/todos", (req, res) => {
  let foundTodos = todoList;
  if (req.query.done) {
    foundTodos = foundTodos.filter(todo => todo.done === JSON.parse(req.query.done));
  }
  res.send(foundTodos)
});

app.get("/api/v1/todos/:id", (req, res) => {
//  const findOne = todoList.filter(todo => todo._id === req.params.id);
  const findOne = todoList.find(todo => todo._id === req.params.id);
  console.log(findOne);
  if (!findOne) {
    return res.status(404).send(`The todo with ID ${req.params.id} was not found!`);
  }
  console.log('found!');
  res.send(findOne);
});

app.get("/api/v1/todos-open", (req, res) => {
  const findOne = todoList.filter(todo => todo.done === false);
  res.send(findOne);
});


// @todo
// Add a todo.
app.post("/api/v1/todos", (req, res) => {
  // Validation
  const schemaTodo = Joi.object().keys({
    todo: Joi.string().min(3).max(200).required(),
    remark: Joi.string().max(200),
    public: Joi.boolean().required()
  });
  const result = Joi.validate(req.body, schemaTodo);
  const {error} = Joi.validate(req.body, schemaTodo);
//  console.log(result);
  console.log(error);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
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
// Update a note.

// @todo
// Delete a note.

// @todo
// Add input validation.

const appPort = process.env.PORT || 3000;
app.listen(app.get('port'), () =>
  console.log(`Backend is listening on port ${app.get('port')}.`)
);

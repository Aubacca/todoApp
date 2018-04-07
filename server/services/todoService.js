const Joi = require("joi");
const uuidv4 = require("uuid/v4");

//
// Application todo data.
let todoList = require("../data/todos.json");

// Todo utils.
validate = function(todo) {
  // Validation
  const schemaTodo = Joi.object().keys({
    todo: Joi.string()
      .min(3)
      .max(200)
      .required(),
    remark: Joi.string().max(200),
    public: Joi.boolean().required(),
    done: Joi.boolean()
  });
  //
  return Joi.validate(todo, schemaTodo);
};

getAll = () => {
  return todoList;
};

findById = function(todoId) {
  return todoList.find(todo => todo._id === todoId);
};

insert = function(rawData) {
  const newTodo = {
    _id: uuidv4(),
    todo: rawData.todo,
    public: rawData.public || true,
    remark: rawData.remark,
    done: false
  };
  todoList.push(newTodo);
  //
  return newTodo;
};

update = function(id, rawData) {
  // Get indox of todo in list.
  const todoUpdated = findById(id);
  // Update todo with new data.
  todoUpdated.todo = rawData.todo;
  todoUpdated.remark = rawData.remark;
  todoUpdated.public = rawData.public;
  todoUpdated.done = rawData.done || false;
  //
  return todoUpdated;
}

module.exports = {
  getAll: getAll,
  findById: findById,
  insert: insert,
  update: update,
  validate: validate
};

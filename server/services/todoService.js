//
// Application todo data.
let todoList = require("../data/todos.json");

getAll = () => {
  return todoList;
};

findById = function(todoId) {
  return todoList.find(todo => todo._id === todoId);
};

exports.getAll = getAll;
exports.findById = findById;

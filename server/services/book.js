// book.js
// a beginner film course
let film101 = {
  professor: "Mr Caruthers",
  numberOfStudents: 20,
  level: "easy"
};

// an expert film course
let film102 = {
  professor: "Mrs Duguid",
  numberOfStudents: 8,
  level: "challenging"
};

let getIt = () => {
  return "got it!";
};

/*
exports.film101 = film101;
exports.film102 = film102;
*/

module.exports = {
  film101: film101,
  film102: film102,
  getIt: getIt
};

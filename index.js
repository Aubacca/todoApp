const express = require("express");
const app = express();

const notes = [
  { id: 1, note: "Learn Python", status: "New" },
  { id: 2, note: "Plan tracks", status: "In process" },
  { id: 3, note: "Order switches and tracks", status: "New" },
  { id: 4, note: "Find new project", status: "In process" },
  { id: 5, note: "Repair computer", status: "Closed" },
  { id: 6, note: "Repair bicylce", status: "Closed" }
];

app.get("/", (req, res) => res.send("Hello World, hello anybody else .."));

app.get("/api/notes", (req, res) => res.send(notes));

app.get("/api/notes/:noteId", (req, res) => {
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
// Add a note.

// @todo
// Update a note.

// @todo
// Delete a note.

// @todo
// Add input validation.

const appPort = process.env.PORT || 3000;
app.listen(appPort, () =>
  console.log(`Backend is listening on port ${appPort}.`)
);

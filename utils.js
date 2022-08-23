const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const chalk = require("chalk");

const getNotes = function () {
  try {
    const notes = loadNotes();
    console.log(notes);
  } catch (err) {
    console.log(err);
  }
};

const addNote = function (title, body) {
  console.log(chalk.bold.underline.green("Adding new Note"));
  const notes = loadNotes();
  const newNote = {
    id: createNoteId(),
    done: false,
    title,
    body,
  };
  notes.push(newNote);
  console.log(
    chalk.bold.underline.yellow.bgCyan("Note Data:", console.table(newNote))
  );

  writeNote(notes);
};

const removeNote = function (id) {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.id !== id);
  console.table(updatedNotes);
  writeNote(updatedNotes);
};



const loadNotes = function () {
  const dataBuffer = fs.readFileSync("./notes.json");
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
};

const writeNote = function (notes) {
  const dataString = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataString);
  console.log(chalk.bold.underline.green("Note added successfully"));
};

const createNoteId = function () {
  return uuidv4();
};

module.exports = { getNotes, addNote, getNotes, removeNote, updateNote };

const fs = require('fs');
const color = require('colors');

/* Add Note */

const addNote = (title, body) => {
  let data = loadNotes();
  let exist = false;

  data.forEach(element => { if(element.title === title) 
    { exist = true; } });
  
  if(exist === false) {
    data.push({
      title: title,
      body: body
    })
    saveNotes(data)
    console.log(color.green('Notes added succesfully'))

  } else {console.log(color.red('This note already exists, you cannot add it again.'))}
};

/* Save Notes */

const saveNotes = (data) => {
  fs.writeFileSync('notes.json', JSON.stringify(data));
}

/* Load Notes */

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json').toString();
    const data = JSON.parse(dataBuffer);

    return data;
  } catch (e) {
    return[]
  }
}

/* Remove Notes */

const removeNotes = (title) => {
  const data = loadNotes();

  data.forEach((element) => {
    if(element.title.toUpperCase() === title.toUpperCase()) {
      data.splice(data.indexOf(element), 1);

      console.log(color.green('Note removed succesfully'));
    } else { console.log(color.red("Note not removed, because this title you provided does not exist")) }
  });

  saveNotes(data);
};

/* Read Note */

const readNotes = (title) => {
  const data = loadNotes();

  const note = data.find((note) => note.title.toUpperCase() === title.toUpperCase()); // This method returns an array. 

  if(note) {
    console.log(color.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(color.red.inverse('Note not found'));
  }
};

/* List Notes */

const listNotes = () => {
  const data = loadNotes();

  data.forEach((e) => {
    console.log(`${color.inverse(e.title)}`);
    console.log(`${e.body}`);
    console.log('');
  })
};

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};
const color = require('colors');
const yargs = require('yargs');
const notes = require('./notes');

// CORE Of the Aplication -> READ, ADD, REMOVE, LIST

// Add Command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'This is the title of the note',
      demandOption: true, 
      type: 'string' 
    },
    body: {
      describe: 'This is the body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => { 
    notes.addNote(argv.title, argv.body);
  }
});

// Remove Command

yargs.command({
  command: 'remove',
  describe: 'Remove a existing note',
  builder: {
    title: {
      describe: 'Remove the note with the specified type...',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNotes(argv.title)
  }
})

// Read Command

yargs.command({
  command: 'read',
  describe: 'Read a existing note',
  builder: {
    title: {
      describe: 'Specifie a note title to read:',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNotes(argv.title)
  }
})

// List Command

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: () => {
    notes.listNotes();
  }
})

yargs.parse(); 
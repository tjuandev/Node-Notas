const color = require('colors');
const yargs = require('yargs');
const notes = require('./notes');

// CORE Of the Aplication -> READ, ADD, REMOVE, LIST

// Customized Commands:

// Add Command

yargs.command({
  command: 'add', // Comando 
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'This is the title of the note', // Descrição
      demandOption: true, // Se é orbigatório dizer o título da obra
      type: 'string' // O tipo primitivo do argumento
    },
    body: {
      describe: 'This is the body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => { // Função que o comando vai disparar, esse argv vai se referir aos argumentos e ajudar nossa vida.
    /* console.log(color.bold('Title:') + color.italic(argv.title))
    console.log(color.italic('Body:', argv.body)) */
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

// Customize Version:

yargs.version('1.1.0')

/* console.log(yargs.argv); // It shows the arguments you pass in,  and the file name, returning a object...
console.log(yargs.argv._[0]); */ 

// Ao invés de usar os console.log acima, nós podemos usar:

yargs.parse(); // Assim vai funcionar o nosso programa, e não precisaremos dar console.log sempre.
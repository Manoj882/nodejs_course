var chalk = require('chalk');
var validator = require('validator');

const yargs = require('yargs');

const notes = require('./notes.js');

yargs.version('1.2.3');


yargs.command({
    command: 'add',
    desccribe: 'Add new note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: false,
            type: 'String',
        },
        body: {
            describe: 'Notes Body',
            demandOption: true,
            type: 'string',

        },
    },
    handler(argv){
    notes.addNote(argv.title, argv.body);
    }
});


//for remove note
yargs.command({
    command: 'remove',
    desccribe: 'Remove note',
    builder: {
        title: {
            describe: 'Remove Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        notes.removeNote(argv.title);

    }
});

//for list note
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes();
    }
});

//for read note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            'describe': 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();


// console.log(yargs.argv);




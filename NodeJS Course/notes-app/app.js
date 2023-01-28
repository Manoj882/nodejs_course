// var doMultiply = require('./utils.js');
var chalk = require('chalk');
var validator = require('validator');
const { number } = require('yargs');

const yargs = require('yargs');

const notes = require('./notes.js');

// var multi = doMultiply(12, 10);

// console.log(multi);
// console.log(validator.isURL('https://mead.io'));

// var greenMsg = chalk.red.italic('Error');
// console.log(greenMsg);


// const command = process.argv[2];
// console.log(process.argv);

// if(command === 'add'){
//     console.log('Adding Note');
// } else if(command === 'remove'){
//     console.log('Remove note');
// }


yargs.version('1.2.3');

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function(){
        console.log('List all notes');
    }
});


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
    handler: function(argv){
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
    handler: function(argv){
        notes.removeNote(argv.title);

    }
});

yargs.parse();


// console.log(yargs.argv);




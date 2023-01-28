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


// yargs.command({
//     command: 'add',
//     describe: 'Add two number',
//     builder: {
//         firstNumber: {
//             describe: 'First Number',
//             demandOption: true,
//             type: 'number',
//         },
//         secondNumber: {
//             describe: 'Second Number',
//             demandOption: true,
//             type: 'number',
//         },
//     },
//     handler: function(argv){
//         console.log("Result:", argv.firstNumber + argv.secondNumber);
//     }
// });

// yargs.parse();



yargs.command({
    command: 'Read',
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
    //     console.log('Title: ', argv.title);
    //     console.log('Body: ', argv.body);
    notes.addNote(argv.title, argv.body);
    }
});

yargs.parse();


// console.log(yargs.argv);




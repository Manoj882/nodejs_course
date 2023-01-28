const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNote = notes.filter((note) => note.title === title);    
    const duplicateNote = notoes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
        title: title,
        body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New Note Added'));
    } else {
        console.log(chalk.red.inverse('This note is already taken'));

    }
}


//remove note
const removeNote = (title) => {
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'),);
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'),);
    }
} 


//for list notes
const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'));

    notes.forEach((note) => console.log(note.title));

};

//for read notes
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON =  dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e){
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};

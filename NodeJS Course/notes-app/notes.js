const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes ...';
}

const addNote = function(title, body){
    const notes = loadNotes();

    const duplicateNote = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNote.length === 0){
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
const removeNote = function(title){
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    });

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'),);
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'),);
    }

    

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};

const fs = require('fs');

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
    console.log('New Note Added');
    } else {
        console.log('This note is already taken');

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
};

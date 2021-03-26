const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter(note => note.title !== title)

    if (notes.length > filteredNotes.length) {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note successfully removed'))
    } else {
        console.log(chalk.red.inverse('No note found with that title'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length !== 0) {
        console.log(chalk.blue('Your notes:'))
        notes.forEach(note => console.log(note.title))
    } else {
        console.log(chalk.red.inverse('No notes found'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find(note => note.title === title)

    if (foundNote) {
        console.log(chalk.blue(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse('No note found with that title'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
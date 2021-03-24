const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Tommy.')

fs.appendFileSync('notes.txt', ' This is the appended line.')
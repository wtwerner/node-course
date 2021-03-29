const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static diretory to server
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tommy Werner'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Tommy Werner'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is the help message.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Winnetka'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userInput = process.argv[2]

if (!userInput) {
    console.log('Must enter a location')
} else {
    geocode(process.argv[2], (err, data) => {
        if (err) {
            return console.log(err)
        } 
    
        forecast(data.latitude, data.longitude, (err, forecastData) => {
            if (err) {
                return console.log(err)
            } 
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

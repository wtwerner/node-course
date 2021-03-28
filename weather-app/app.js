const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location')
} else {
    geocode(location, (err, { latitude, longitude, location } = {}) => {
        if (err) {
            return console.log(err)
        } 
    
        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log(err)
            } 
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

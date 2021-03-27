const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3c54cf185f88f024c262840a885fbf52&query=${lat},${long}&units=f`

    request({ url: url, json: true }, (err, resp) => {
        if (err) {
            callback('Unable to connect to weather service', undefined)
        } else if (resp.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                `${resp.body.current.weather_descriptions[0]} - It is currently ${resp.body.current.temperature} degrees out. It feels like ${resp.body.current.feelslike} degrees.`
            )
        }
    })
}

module.exports = forecast
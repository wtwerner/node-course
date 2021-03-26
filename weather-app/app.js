const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3c54cf185f88f024c262840a885fbf52&query=37.8267,-122.4233&units=f'
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid3R3ZXJuZXIiLCJhIjoiY2ttcW93ZDJwMDAxaTJ1bzRtb3Rpc2Z0dCJ9.OmtM1HeN4QMR_5QjTWUJKQ&limit=1'

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]} - It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`)
})

request({ url: geoURL, json: true }, (error, response) => {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]

    console.log(`Lat: ${lat}, Long: ${long}`)
})


const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=3c54cf185f88f024c262840a885fbf52&query=45,-75&units=f`

const request = http.request(url, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk.toString()
    })

    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (err) => {
    console.log('An error', err)
})

request.end()
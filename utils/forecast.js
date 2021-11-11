const request = require('request')
const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d5a5b05bc4f6209524bb4ff814b4b6d4&query=' + latitude + ',' + longitude; //+ '&units=f';
    request({ url, json: true }, (error, { body }) => { 
        if (error) {
            callback('unable to connect to weather service!', '')
        } else if (body.error) {
            callback('unable to find location', '')
        } else {
            callback('', 'it is ' + body.current.weather_descriptions + '. the temprture is ' + body.current.temperature + ' degrees out.')
        }
    })
}

module.exports = forecast
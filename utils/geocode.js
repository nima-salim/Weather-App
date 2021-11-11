const request = require('request')

const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibmltYXBzIiwiYSI6ImNrOHMzOWtsNDAyNTUzZ2w5OWlvMDRnbHAifQ._KiBr-mwdBreuMVmIKjihw&limit=2"; // encodeURIComponent to deal with spacing in the entier strings when the user searches

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to the weather service!', '')
        } else if (!(body.features[0])) {
            callback('Unable to find location. Try another search', '')
        } else {
            callback('', {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })




}

module.exports = geocode
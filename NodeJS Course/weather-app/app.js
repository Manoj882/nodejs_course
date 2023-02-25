//geo-coding using MapBox api -> geocoding service api
const request = require('postman-request');

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmttYW5vajEyMyIsImEiOiJjbGVqZHVyazIwYWozM3FrNWtha3V0dWd1In0.ON5NDAiHEB-U39tW3gfqKw&limit=1';

request({uri: geoCodeUrl, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(latitude, longitude);
});


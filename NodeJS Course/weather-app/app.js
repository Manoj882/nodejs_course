// const request = require('postman-request');
// const url ='http://api.weatherstack.com/current?access_key=dcc0349c8a5d890b23e36e096aebb40b&query=37.8267,-122.4233';

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error){
//         console.log('Unable to find location');

//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. There is a ' + response.body.current.precip + ' % chance of rain.');

//     }
  
// });

//for geocoding

const http = require('http');
const request = require('postman-request');

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmttYW5vajEyMyIsImEiOiJjbGVqZHVyazIwYWozM3FrNWtha3V0dWd1In0.ON5NDAiHEB-U39tW3gfqKw';

request({uri: geoCodeUrl, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location service');

    } else if(response.body.features.length === 0){
        console.log('Unable to find location. Try another search');

    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];

        console.log(latitude, longitude);
    }
});

// http.createServer(function(req, res){
//     const body = 'This is the body of response';
//     const content_length = body.length;
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Content-Length': content_length,
//     });
//     res.end(body);


// }).listen(3000);

// console.log('Server is running on http://127.0.0.1:3000/');
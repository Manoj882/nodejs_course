const request = require('postman-request');
const geocode = require('./utils/geocode')
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




// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmttYW5vajEyMyIsImEiOiJjbGVqZHVyazIwYWozM3FrNWtha3V0dWd1In0.ON5NDAiHEB-U39tW3gfqKw';

// request({uri: geoCodeUrl, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to location service');

//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search');

//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];

//         console.log(latitude, longitude);
//     }
// });



geocode('boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});


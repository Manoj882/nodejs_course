const request = require('postman-request');
const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=dcc0349c8a5d890b23e36e096aebb40b&query=' + latitude + ',' + longitude + '&units=f';

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined);

        } else if(body.error){
            callback('Unable to find location!', undefined);

        } else {
            
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree out. There is a ' + body.current.precip + ' % chance of rain.');
        }

    });

};

module.exports = forecast;


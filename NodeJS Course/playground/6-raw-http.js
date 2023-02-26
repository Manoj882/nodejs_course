const http = require('http');

const url ='http://api.weatherstack.com/current?access_key=dcc0349c8a5d890b23e36e096aebb40b&query=45,-75&units=f';

const request = http.request(url, (response) =>{
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();

    });

    response.on('end', ()=> {
        const body = JSON.parse(data);
        console.log(body);

    });

});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();


const path = require('path');
const express = require('express');
const hbs = require('hbs');



const app = express();

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'Manoj BK',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Manoj BK',

    });
});


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Ram BK',
        helpText: 'This is some helpful text',
    });
});



app.get('/weather', (req, res) => {
    res.send({
        'forecast': 'sunny',
        'location': 'ktm',

    });
});

app.get('/help/*', (req, res) => {
// res.send('Help article not found');
res.render('404',{
    title: '404',
    name: 'Manoj BK',
    errorMessage: 'Help article not found.',
});
});

app.get('*', (req, res) => {
    // res.send('My 404 page');
    res.render('404', {
        title:'404',
        name: 'Manoj BK',
        errorMessage: 'Page not found.',
    });
});

app.listen(3000, ()=> {
    console.log('Server is up on port 3000.');
});


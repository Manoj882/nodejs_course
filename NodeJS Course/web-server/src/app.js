
const path = require('path');
const express = require('express');



// console.log(__dirname);
// // console.log(__filename);
// console.log(path.join(__dirname, '../public'))



const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>{
    res.render('index', {
        'title': 'Weather',
        'name': 'Manoj BK',
    });
});



app.get('/weather', (req, res) => {
    res.send({
        'forecast': 'sunny',
        'location': 'ktm',

    });
});

app.listen(3000, ()=> {
    console.log('Server is up on port 3000.');
});


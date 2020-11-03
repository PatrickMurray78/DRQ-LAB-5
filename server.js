const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Home page displays welcome message
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying!');
});

// When user enters name at xxx /hello/xxx, this name is saved and send back
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
});

// Display mymovies as JSON data when path is /api/movies
app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:mymovies});
})

// Display index.html when the path is /test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Display first and last name when the path is /name - GET
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
});

// Display first and last name when the path is /name - POST
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
});

// Log to console the port we are listening on
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
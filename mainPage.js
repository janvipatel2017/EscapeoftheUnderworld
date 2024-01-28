const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('mainPage');
});

app.get('/firstPuzzleIntro', (req, res) => {
    res.render('firstPuzzleIntro');
});

app.get('/firstPuzzle', (req, res) => {
    res.render('firstPuzzle');
});
  
app.get('/secondPuzzleIntro', (req, res) => {
    res.render('secondPuzzleIntro');
  });
  
app.get('/leftPath', (req, res) => {
    // Handle logic for the left path
    res.render('leftPath'); // Create and render the corresponding EJS file for the left path
});

app.get('/leftPathSuccess', (req, res) => {
    // Handle logic for the left path success
    res.render('leftPathSuccess'); // Create and render the corresponding EJS file for the left path success
});
  
app.get('/rightPath', (req, res) => {
    // Handle logic for the right path
    res.render('rightPath'); // Create and render the corresponding EJS file for the right path
});

app.get('/thirdPuzzle', (req, res) => {
    // Handle logic for the right path success
    res.render('thirdPuzzle'); // Create and render the corresponding EJS file for the right path success
});

app.get('/fourthPuzzle', (req, res) => {
    // Handle logic for the right path success
    res.render('fourthPuzzle'); // Create and render the corresponding EJS file for the right path success
});

app.get('/successfulEscape', (req, res) => {
    res.render('successfulEscape');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

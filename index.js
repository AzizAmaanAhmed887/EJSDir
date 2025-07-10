const express = require('express');
const app = express();
const path = require('path');

let port = 8080;

app.set('views engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ig/:username', (req, res) => {
    let {username} = req.params;
    let instaData = require('./data.json')
    const data = instaData[username]
    if (data) { //if valid data, render instagram.ejs
        res.render("instagram.ejs", {data});
    } else { //else print the page shows "page not found"
        res.render("404.ejs");
    }
})
app.get('/home', (req, res) => {
    res.send("This is the home page");
});
app.get('/', (req, res) => {
    res.render('home.ejs');
});
app.get('/rolldice', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1 // Assuming that this data is coming from DB
    res.render('rolldice.ejs', {diceVal});//generally option part ko key-value pair mein bheja jata hai. However, if we want,we can keep the key-value pair as of the same name,so instead of passing a key-value pair as of the same name, we pass only one name in which both are applicable.
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


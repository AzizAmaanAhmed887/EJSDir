const express = require('express');
const app = express();
const path = require('path');

let port = 8080;

app.set('views engine', 'ejs');

app.set("views" , path.join(__dirname, "views"));
// /home route
app.get('/home', (req, res) => {
    res.send("This is the home page");
});
//root path
app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


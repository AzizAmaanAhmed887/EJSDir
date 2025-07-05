const express = require('express');
const app = express();

let port = 8080;

app.set('view engine', 'ejs');

//Set the server
app.get('/', (req, res) => {
    res.send("This is the home page");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


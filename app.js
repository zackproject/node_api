const express = require('express');

const app = express();
const port = 3000;


//dirname is the path of the server
// Ex: localhost:3000/404.html
app.use(express.static(__dirname + "/public"))

// add routes from router.js
app.use('/',require('./router/routes'))
// add pets from pets.js
app.use('/pets',require('./router/pets'))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});

app.listen(port, () => {
    console.log("Running on", port);
})
const express = require('express');

const app = express();
const port = 3000;


//dirname is the path of the server
// Ex: localhost:3000/404.html
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.get('/cards', (req, res) => {
    res.send("Pagina cartas")
});

app.get('/users', (req, res) => {
    res.send("Pagina usuarios")
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});


app.listen(port, () => {
    console.log("Running on", port);
})
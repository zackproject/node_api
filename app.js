const express = require('express');

const app = express();
const port = 3000;
const user = "";
const password = "";
const database = ""
const uri = `mongodb+srv://${user}:${password}@cluster0.yleh4eg.mongodb.net/${database}?retryWrites=true&w=majority`;

// to use mongoDB, installed mongoose
const mongoose = require('mongoose');
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('Connect to mongodb'))
    .catch(e => console.log('Error connection', e))


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
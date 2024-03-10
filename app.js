const express = require('express');

const app = express();
// add dotenv file with secret config
require('dotenv').config();
const port = process.env.PORT;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

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

// add cards form cards.js
app.use('/cards',require('./router/cards'))
app.use('/users',require('./router/users'))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});

app.listen(port, () => {
    console.log("Running on", port);
})
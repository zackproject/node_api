const express = require('express');
// define a router to manage routes
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

router.get('/cards', (req, res) => {
    res.send("Pagina cartas")
});

router.get('/users', (req, res) => {
    res.send("Pagina usuarios")
});

// export to can used in app.js
module.exports = router;
const express = require('express');
// define a router to manage routes
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

// export to can used in app.js
module.exports = router;
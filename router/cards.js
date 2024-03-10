const express = require('express');
// define a router to manage routes
const router = express.Router();

const Card = require("../models/card")

router.get('/', async (req, res) => {
    try {
        // finds all card with moongose and get from MongoDB
        const cardList = await Card.find();
        res.send(cardList)
    } catch (error) {
        res.send(String.valueOf(error))
    }
});

router.get('/:id', async (req, res) => {
    // finds all card with moongose and get from MongoDB
    const mId = req.params.id;
    try {
        const cardList = await Card.findById(mId);
        res.send(cardList)
    } catch (error) {
        res.send(mId, "Not found")

    }
});


// export to can used in app.js
module.exports = router;
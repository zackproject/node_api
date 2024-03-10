const express = require('express');
// define a router to manage routes
const router = express.Router();
const Card = require("../models/card")
const path = require('path');

router.get('/', async (req, res) => {
    try {
        // finds all card with moongose and get from MongoDB
        const cardList = await Card.find();
        res.send(cardList)
    } catch (error) {
        res.send(String.valueOf(error))
    }
});

router.get('/id/:id', async (req, res) => {
    // finds all card with moongose and get from MongoDB
    const mId = req.params.id;
    try {
        const cardList = await Card.findById(mId);
        // const cardList = await Card.findOne({ _id: mId });
        res.send(cardList)
    } catch (error) {
        res.status(404).send(`Not found id '${mId}'`);
    }
});


router.get('/create', (req, res) => {
    const filePath = path.join(__dirname, '../public/forms/card.html');
    res.sendFile(filePath)
})


// cards.html form
router.post('/', async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const cardDB = new Card(body);
        await cardDB.save();
        // await Card.create(body);
        res.redirect("/cards")
    } catch (error) {
        console.log(error);
    }
});


router.delete('/delete/:id', async (req, res) => {
    const mId = req.params.id;
    try {
        await Card.findByIdAndDelete(mId)
        // await Card.create(body);
        res.send(`Deleted '${mId}'`)
    } catch (error) {
        console.log(error);
    }
});

// export to can used in app.js
module.exports = router;
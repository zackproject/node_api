const express = require('express');
// define a router to manage routes
const router = express.Router();

const User = require("../models/user")

router.get('/', async (req, res) => {
    try {
        // finds all users with moongose and get from MongoDB
        const userList = await User.find();
        res.send(userList)
    } catch (error) {
        res.send(String.valueOf(error))
    }
});

router.get('/:id', async (req, res) => {
    // finds user/:id with moongose and get from MongoDB
    const mId = req.params.id;
    try {
        const userList = await User.findById(mId);
        res.send(userList)
    } catch (error) {
        res.send(mId, "Not found")

    }
});


// export to can used in app.js
module.exports = router;
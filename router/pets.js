const express = require('express');
// define a router to manage routes
const router = express.Router();

const petList = [
    { "id": "1", "name": "Dog" },
    { "id": "2", "name": "Cat" },
    { "id": "3", "name": "Bird" },
    { "id": "4", "name": "Fish" },
    { "id": "5", "name": "Rabbit" },
    { "id": "6", "name": "Hamster" },
    { "id": "7", "name": "Snake" },
    { "id": "8", "name": "Turtle" },
    { "id": "9", "name": "Guinea Pig" },
    { "id": "10", "name": "Lizard" }
];


router.get('/', (req, res) => {
    res.send(petList)
});

router.get('/:id', (req, res) => {
    const mId = req.params.id;
    res.send(petList.filter(e => e.id === mId))
});



// export to can used in app.js
module.exports = router;
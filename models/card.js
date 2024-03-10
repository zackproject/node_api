const mongoose = require('mongoose');
// generate schema
const Schema = mongoose.Schema;
// define a schema of cards (id:string, color:string, name:string)
const cardSchema = new Schema({
    id: String,
    color: String,
    name: String
});
// add schema to card
const Card = mongoose.model("Card", cardSchema);
// export to app.js
module.exports = Card;
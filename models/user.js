const mongoose = require('mongoose');
// generate schema
const Schema = mongoose.Schema;
// define a schema of cards (id:string, color:string, name:string)
const userSchema = new Schema({
    id: String,
    username: String,
    password: String
});
// add schema to card
const User = mongoose.model("User", userSchema);
// export to app.js
module.exports = User;
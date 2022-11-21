const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title : String, 
    file : String,
    thumbnail : String,
    createdAt : Date
})

module.exports = model('filesCollection', mySchema );
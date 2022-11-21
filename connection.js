const mongoose = require('mongoose');

const databaseName = "julmttf200";
const url = `mongodb+srv://Syedkashif:1234@cluster0.9wlcxjh.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// connect to database
// async function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;

// 1. Asynchronous - simultaneously
// 2. Synchronous - one by one

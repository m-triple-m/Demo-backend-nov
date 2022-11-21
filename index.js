// importing express
const express = require('express');
const userRouter = require('./Routers/userRouter');
const fileRouter = require('./Routers/fileRouter');
const utilRouter = require('./Routers/Util');
const cors = require('cors');

// initiliazing express
const app = express();

const port = process.env.PORT || 5000;

// this will parse JSON data to javascript
app.use(express.json());
app.use(cors({ origin : [ 'http://localhost:3000' ]}));

// middleware : to process request and do not send response.
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/file', fileRouter);

// route : to process request and send response.
app.get( '/', (req, res) => {
    res.send('Response from express');
})

// route or endpoint
app.get( '/home', (req, res) => {
    res.send('Response from home');
})

app.use(express.static('./static/uploads'));

app.listen( port, () => {
    console.log('server has started');
});
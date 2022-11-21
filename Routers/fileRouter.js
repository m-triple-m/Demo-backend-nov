// to process user requests only 
const express = require('express');
const router = express.Router();
const Model = require('../models/fileModel');


// Response Codes 
// 200 - Successfull
// 400 - Client Side Error 
// 500 - Server Side Error 



router.post('/add', (req, res) => {
    console.log(req.body);
    //asynchronous functions : In asynchronous function we use then and catch then is for successful completion and catch is used for unsuccessful completion.
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getall', (req, res) => {

    Model.find({})
    .then((result) => {
        console.log(result); 
        res.json(result);  
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/getbyemail/:email',(req, res) => {
    console.log(req.params.email);
    // res.send('reuest for email');

    Model.findOne({email : req.params.email })
    // findOne : prints one entry and in the form of object not in the form of array 
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

router.delete('/delete/:id', (req,res) => {
    // console.log(req.params.delete);
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

// we use put for update 
// id tell which user we have to update and body tell what to update in that respective user. 
router.put('/update/:id', (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})


module.exports = router;
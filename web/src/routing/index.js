var express = require('express');
var router = express.Router();
var url = 'mongodb+srv://audioplayer:audioplayer@mycluster-vgey9.mongodb.net/test?retryWrites=true';
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)
    var db = database.db('audiodata');

    router.get('/recordsData', function (req, res) {
        var collectionName = req.url.split('/')[1];
        db.collection(collectionName).find().toArray(function (err, data) {
            for (var i = 0; i < data.length; i++) {
                data[i].id = data[i]._id;
                delete data[i]._id;
            }

            res.send(data);
        });
    });
});

module.exports = router;
var collection;
var _db;
var _format;
function startMongo() {
    var MongoClient = require('mongodb').MongoClient
        , format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
        if (err) {
            throw err;
        } else {
            _db=db;
            _format=format;
            console.log("successfully connected to the database");
            collection = _db.collection('test_insert');
          //if not commented creates a new object every time the server is launched
          var lol = {
                name: "Ex1",
                socialNetworkId: String,
                gender: "Male",
                favouriteBids: [], // User's favourites bids , but not bought yet.
                bids: [],
                img: {data: null, contentType: null}
            };
           // insertToTest(lol);

          /*  collection.insert(lol, function (err, docs) {
                collection.count(function (err, count) {
                    console.log(format("count = %s", count));
                    _db.close();
                });
            });
*/
          //to remove all collection collection.remove({})
           /* collection.count(function (err, count) {
                console.log(format("count = %s", count));
                _db.close();
            });*/
        }
        //collection.remove({"gender": "Male"});//Delete object which has a : 2

       /* collection.find().toArray(function (err, results) {
            console.dir(results);
            // Let's close the db
            _db.close();
        });
*/
    });
}
function insertToTest(data) {
    console.log("indef?");
    console.log(_format==undefined);
    console.log("in insertToTest");
    collection.insert(data, function (err, docs) {
        collection.count(function (err, count) {
            _db.close();
        });
    });

    collection.count(function (err, count) {
        console.log(_format("count = %s", count));
        _db.close();
    });

    collection.find().toArray(function (err, results) {
        console.dir(results);
        // Let's close the db
        _db.close();
    });

}

exports.insertTo=function (req,res) {
console.log("req");
    console.log(req.body);
var user =  req.body;

    var Yara = {
        name: user.name,
        socialNetworkId: user.socialNetworkId,
        gender: user.gender,
        favouriteBids: user.favouriteBids, // User's favourites bids , but not bought yet.
        bids: user.bids,
        img: {data: null, contentType: null}
    };

   /* var lol1 = {
        name: "Eaaaa",
        socialNetworkId: String,
        gender: "Male",
        favouriteBids: [], // User's favourites bids , but not bought yet.
        bids: [],
        img: {data: null, contentType: null}
    };*/
   /* console.log(req.body.data);
    var data= decodeURI(req.body.data);
    console.log(data);*/

    insertToTest(Yara);

    res.send({
        success: true,
    });
}

exports.startMongo = startMongo;

/*
var people_list = require('./data/People_list');

exports.getPeopleList = function(req, res) {
    res.send(people_list);
    console.log("request sent");

};
*/


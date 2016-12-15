var collection;
var _db;
var _format;
var results=[];

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
            //collection.remove({});//Delete object which has a : 2

            var data = {
                user:"56",
                name: "Eaaaa",
                socialNetworkId: String,
                gender: "Male",
                price:0,
                imgSrc: String
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
            });
            */
        }

       // collection.remove({"bids": null});//Delete object which has a : 2
        /*
        collection.find().toArray(function (err, results) {
            console.dir(results);
            // Let's close the db
            _db.close();
        });*/

    });
}

exports.getUser = function(req,res){
    collection.find({"user": req}).toArray(function (err, result) {
        if (err) {
            console.log(err);
        } else if (result.length) {
            console.log("found")
            return result;
        } else {
            console.log('No document(s) found with defined "find" criteria!');
        }
        //Close connection
        _db.close();
    });
}

function insertToTest(data) {
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

exports.getUsersList=function (req,res) {
    collection.find().toArray(function (err, results) {
        res.send({
            results:results
        });
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
        price: user.price,
        imgSrc: user.imgSrc
    };

    insertToTest(Yara);

    res.send({
        success: true
    });
}

exports.startMongo = startMongo;



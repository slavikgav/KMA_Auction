function startMongo() {
    var MongoClient = require('mongodb').MongoClient
        , format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
        if (err) {
            throw err;
        } else {
            console.log("successfully connected to the database");
            var collection = db.collection('test_insert');
          //if not commented creates a new object every time the server is launched
          /*
          var lol = {
                name: "Slava",
                socialNetworkId: String,
                gender: "Male",
                favouriteBids: [], // User's favourites bids , but not bought yet.
                bids: [],
                img: {data: null, contentType: null}
            };

            collection.insert(lol, function (err, docs) {
                collection.count(function (err, count) {
                    console.log(format("count = %s", count));
                    db.close();
                });
            });
            */
          //to remove all collection collection.remove({})
            collection.count(function (err, count) {
                console.log(format("count = %s", count));
                db.close();
            });
        }
        //collection.remove({"a": 2});//Delete object which has a : 2

        collection.find().toArray(function (err, results) {
            console.dir(results);
            // Let's close the db
            db.close();
        });

    });
}
exports.startMongo = startMongo;